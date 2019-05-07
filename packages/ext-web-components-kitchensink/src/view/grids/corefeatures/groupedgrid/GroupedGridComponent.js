Ext.require([
    'Ext.grid.cell.Number',
    'Ext.grid.cell.Widget',
    'Ext.grid.SummaryRow',
    'Ext.ux.rating.Picker'
]);

import './GroupedGridComponent.html';

export default class GroupedGridComponent {
    onReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/restaurants.json',
            },
            sorters: ['cuisine', 'name'],
            groupField: 'cuisine'
        });

        this.grid = event.detail.cmp;
        this.grid.setStore(store);
    }

    onButtonReady = (event) => {
        this.onButton = event.detail.cmp;
    }

    offButtonReady = (event) => {
        this.offButton = event.detail.cmp;
    }

    onGroupClick = () => {
        this.grid.setGrouped(true);
        this.onButton.setPressed(true);
        this.offButton.setPressed(false);
    }

    offGroupClick = () => {
        this.grid.setGrouped(false);
        this.offButton.setPressed(true);
        this.onButton.setPressed(false);
    }
}
