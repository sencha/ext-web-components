import './NestedListComponent.css';
import './NestedListComponent.html';
Ext.require('Ext.Toast');

export default class NestedListComponent {

  constructor () {
    console.log('in NestedListComponent constructor');

    this.store = Ext.create('Ext.data.TreeStore', {
      autoLoad: true,
      root: {},
      proxy: {
        type: 'ajax',
        url: 'resources/data/tree/cars.json'
      }
    });
  }

  onLeafItemTap = (nestedList, list, index, target, record) => {
    Ext.toast(`You selected ${record.get('text')}`)
  }
}
