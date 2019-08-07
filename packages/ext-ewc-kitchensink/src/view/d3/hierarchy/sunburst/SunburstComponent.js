import './SunburstComponent.html';

Ext.require([
    'Ext.util.Format',
    'Ext.plugin.Responsive'
]);

export default class SunburstComponent {

    constructor() {
        this.store = Ext.create('Ext.data.TreeStore', {
            autoLoad: true,
            defaultRootText: 'd3',
            fields: [
                'name',
                'path',
                'size',
                {
                    name: 'leaf',
                    calculate: function(data) {
                        return data.root ? false : !data.children;
                    }
                },
                {
                    name: 'text',
                    calculate: function(data) {
                        return data.name;
                    }
                }
            ],
            proxy: {
                type: 'ajax',
                url: 'resources/data/tree/tree.json'
            },
            idProperty: 'path'
        });
    }

    onSelectionChange = ({ detail }) => {
        if (Ext.isArray(detail.selected)) {
            this.selection = detail.selected[0];
            this.sunburstCmp.setSelection(this.selection);
        }
    }

    onTooltip = (component, tooltip, node) => {
        try {
            const record = node.data,
                size = record.get('size'),
                length = record.childNodes.length;

            tooltip.setTitle(record.get('text'));
            tooltip.setHtml(size ?
                Ext.util.Format.fileSize(size) :
                length + ' file' + (length === 1 ? '' : 's') + ' inside.'
            );
        }
        catch (e) {
            console.error(e);
        }
    }

    onTreeReady = (event) => {
        this.treeListCmp = event.detail.cmp;

        if (Ext.os.is.Phone) {
            this.treeListCmp.setWidth(undefined);
            this.treeListCmp.setHeight(200);
        } else {
            this.treeListCmp.setWidth(230);
            this.treeListCmp.setHeight(undefined);
        }

        this.treeListCmp.setStore(this.store);
        this.treeListCmp.on('tap', this.onSelectionChange.bind(this));
        this.treeListCmp.setSelection(this.selection);
    }

    onPanelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        this.panelCmp.setResponsiveConfig(
            {
                'width > 600': { layout: 'hbox' }
            }
        );
    }

    ond3Ready = (event) => {
        this.sunburstCmp = event.detail.cmp;
        this.sunburstCmp.setStore(this.store);
        this.sunburstCmp.setTooltip({
            renderer:this.onTooltip.bind(this),
        });
        this.sunburstCmp.setSelection(this.selection);
    }
}
