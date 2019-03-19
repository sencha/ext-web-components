import './DisclosureListComponent.css';
import './DisclosureListComponent.html';
Ext.require('Ext.MessageBox');

export default class DisclosureListComponent {

  constructor () {
    console.log('in DisclosureListComponent constructor');

    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    });
  }

  listready(event) {
    const tpl = `<div>{first_name} {last_name}</div>`
    this.cmp = event.detail.cmp;
    this.cmp.setstore(this.store);
    this.cmp.setItemTpl(tpl);
  }

}
