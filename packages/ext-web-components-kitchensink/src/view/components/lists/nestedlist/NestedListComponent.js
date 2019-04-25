import './NestedListComponent.html';

export default class NestedListComponent {
  constructor () {
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

  onItemReady(event) {
    this.theListview = event.detail.cmp;
    this.theListview.setStore(this.store);
  }

  onLeafItemTap(event) {
    Ext.toast(`You selected ${event.detail.record.get('text')}`)
  }
}
