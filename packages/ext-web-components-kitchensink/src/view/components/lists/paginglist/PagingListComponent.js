import './PagingListComponent.html';

Ext.require('Ext.plugin.ListPaging');

export default class PagingListComponent {
    constructor() {
        this.bufferZone = false;
    }

    onContainerReady = (event) => {
        this.containerCmp = event.detail.cmp;
    }

    segmentButtonReady = (event) => {
        this.segmentButtonCmp = event.detail.cmp;
    }

    setBufferZone = (event) => {
        let labelText;
        this.bufferZone = event.detail.button.getText();

        if (this.bufferZone === 'OFF') {
            labelText = '<b>Auto Paging</b>: OFF';
        } else{
            labelText = `<b>Auto Paging</b>: ON (buffer zone: ${this.bufferZone})`;
        }

        const plugin = this.list.findPlugin('listpaging');
        plugin.setAutoPaging(this.bufferZone !== 'OFF');
        plugin.setBufferZone(parseInt(this.bufferZone, 10) || 0);

        this.store.removeAll();
        this.store.loadPage(1);
        this.containerCmp.setHtml(labelText);

        this.segmentButtonCmp.items.items.forEach(items => items.setPressed(false));
        event.detail.button.setPressed(true);
    }

    listReady = (ele) => {
        this.listCmp = ele.detail.cmp;
        const tpl = '<div>{name}</div>';

        this.store = Ext.create('Ext.data.Store', {
            fields: ['name'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/Companies',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    implicitIncludes: false
                },
                extraParams: {
                    shuffle: true
                }
            }
        });
        this.listCmp.setItemTpl(tpl);
        this.listCmp.setStore(this.store);
    }
}
