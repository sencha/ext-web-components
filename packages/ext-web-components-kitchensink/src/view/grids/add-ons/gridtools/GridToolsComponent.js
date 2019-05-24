import './GridToolsComponent.html';

export default class GridToolsComponent {
    constructor() {}

    onGridReady = (event) => {
        this.gridCmp = event.detail.cmp;

        const store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['name', 'cuisine'],
            storeId: 'restaurants',
            groupField: 'cuisine',
            sorters: ['cuisine', 'name'],
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: 'resources/data/restaurants.json'
            }
        });

        this.gridCmp.setStore(store);
    }

    firstColumnReady = (event) => {
        const nameColumnCmp = event.detail.cmp;
        nameColumnCmp.setCell({ tools:{ pin: { handler: this.onPinClick.bind(this) } } });
    }

    secondColumnReady = (event) => {
        const cuisineColumnCmp = event.detail.cmp;
        cuisineColumnCmp.setCell({ tools:{ gear: { handler: this.onGearClick.bind(this) } } });
    }

    thirdColumnReady = (event) => {
        const searchColumnCmp = event.detail.cmp;
        searchColumnCmp.setCell({ tools:{ search: { handler: this.onSearchClick.bind(this) } } });
    }

    onPinClick = (grid, info) => {
        Ext.Msg.alert('Pin', `Pinned item ${info.record.data.name}`);
    }

    onGearClick = (grid, info) => {
        Ext.Msg.alert('Settings', `Change settings for ${info.record.data.name}`);
    }

    onSearchClick = (grid, info) => {
        Ext.Msg.alert('Search', `Search for item ${info.record.data.name}`);
    }
}
