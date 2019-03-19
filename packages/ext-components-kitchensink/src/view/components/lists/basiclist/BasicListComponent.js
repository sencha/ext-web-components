import './BasicListComponent.css';
import './BasicListComponent.html';

Ext.require('Ext.Toast');

export default class BasicListComponent {

  constructor () {
    console.log('in BasicListComponent constructor');

    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    })
  }

  listready(event) {
    const tpl = `<div><div style="fontSize: '16px', marginBottom: '5px'">{first_name} {last_name}</div><div style="fontSize: '12px', color: '#666'">{title}</div></div>`;
    this.cmp = event.detail.cmp;
    this.cmp.setStore(this.store);
    this.cmp.setItemTpl(tpl);
  }

  onSelect(list, record){
    Ext.toast(`You selected ${record.get('first_name')} ${record.get('last_name')}.`)
  }

}
