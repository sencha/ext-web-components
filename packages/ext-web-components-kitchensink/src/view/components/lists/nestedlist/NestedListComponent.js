import './NestedListComponent.html';

export default class NestedListComponent {
    constructor() {
        this.store = Ext.create('Ext.data.TreeStore', {
            autoLoad: true,
            root: {},
            proxy: {
                type: 'ajax',
                url: 'resources/data/tree/cars.json'
            },
            sorters: ['last_name', 'first_name']
        });
    }

    onListReady = (event) => {
        this.listCmp = event.detail.cmp;
        this.listCmp.setStore(this.store);
    }

    onLeafItemTap = (event) => {
        Ext.toast(`You selected ${event.detail.record.get('text')}`);
    }
}
