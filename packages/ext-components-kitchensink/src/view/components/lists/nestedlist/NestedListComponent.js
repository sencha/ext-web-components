import './NestedListComponent.css';
import './NestedListComponent.html';

export default class NestedListComponent {
  constructor () {}

  onItemReady(event) {
    this.theListview = event.detail.cmp;
    this.store = Ext.create('Ext.data.TreeStore', { 
      autoLoad: true,
      root: {},
      proxy: {
        type: 'ajax',
        url: 'resources/data/tree/cars.json'
      },
      sorters: ['last_name', 'first_name']
    });
    this.theListview.setStore(this.store);
  }

  onLeafItemTap({record}) {
    Ext.toast(`You selected ${record.get('text')}`)
  }
}
