import './RestaurantData';

Ext.require([
    'Ext.grid.cell.Number',
    'Ext.grid.cell.Widget',
    'Ext.grid.SummaryRow',
    'Ext.ux.rating.Picker'
]);

export default class GroupedGridComponent {
  constructor () {
    console.log('in GroupedGridComponent constructor');
  }

  onReady(event) {
    const store = Ext.create('Ext.data.Store', {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: '/KitchenSink/Restaurants'
        },
        sorters: ['cuisine', 'name'],
        groupField: 'cuisine'
    });

    this.grid = event.detail.cmp;
    this.grid.setStore(store);
  }
}
