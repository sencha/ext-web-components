import './DisclosureListComponent.html';

export default class DisclosureListComponent {
  constructor () {}

  onItemReady = (event) => {
    this.theListview = event.detail.cmp;
    const tpl = `<div>{first_name} {last_name}</div>`;
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    });

    this.theListview.setOnItemDisclosure(this.msgAlert.bind(this));
    this.theListview.setItemTpl(tpl);
    this.theListview.setStore(this.store);
  }

  msgAlert = (param) => {
    Ext.Msg.alert('Tap', 'Disclose more info for ' + param.get('first_name'), Ext.emptyFn);
  };
}
