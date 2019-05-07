import './PagingListComponent.html';
//import '../stocks.js';

Ext.require('Ext.plugin.ListPaging');

export default class PagingListComponent {
    constructor() {
        this.bufferZone = false;
    }

    onContainerReady = (event) => {
        this.container = event.detail.cmp;
    }

    segmentButtonReady = (event) => {
        this.segmentButton = event.detail.cmp;
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
        this.container.setHtml(labelText);

        this.segmentButton.items.items.forEach(items => items.setPressed(false));
        event.detail.button.setPressed(true);
    }

    listReady = (ele) => {
        this.list = ele.detail.cmp;
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
        this.list.setItemTpl(tpl);
        this.list.setStore(this.store);
    }
}
