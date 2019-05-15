import './RelGridColumnComponent.html';

export default class RelGridColumnComponent {
    constructor() {}

    onGridReady = (event) => {
        this.grid = event.detail.cmp;
        const store = Ext.create('Ext.data.Store', {
            data: [
                { first: 'Mark', last: 'Brocato', trend: [1, 2, 3, 4, 3, 2, 1] }
            ]
        });
        this.grid.setStore(store);
    }
}
