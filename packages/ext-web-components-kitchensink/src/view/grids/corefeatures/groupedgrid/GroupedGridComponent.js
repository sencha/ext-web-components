Ext.require([
    'Ext.grid.cell.Number',
    'Ext.grid.cell.Widget',
    'Ext.grid.SummaryRow',
    'Ext.ux.rating.Picker'
]);

import './GroupedGridComponent.html';

export default class GroupedGridComponent {
    onGridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/restaurants.json',
            },
            sorters: ['cuisine', 'name'],
            groupField: 'cuisine'
        });

        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(store);
    }

    onButtonReady = (event) => {
        this.onButtonCmp = event.detail.cmp;
    }

    offButtonReady = (event) => {
        this.offButtonCmp = event.detail.cmp;
    }

    onGroupClick = () => {
        this.gridCmp.setGrouped(true);
        this.onButtonCmp.setPressed(true);
        this.offButtonCmp.setPressed(false);
    }

    offGroupClick = () => {
        this.gridCmp.setGrouped(false);
        this.offButtonCmp.setPressed(true);
        this.onButtonCmp.setPressed(false);
    }
}
