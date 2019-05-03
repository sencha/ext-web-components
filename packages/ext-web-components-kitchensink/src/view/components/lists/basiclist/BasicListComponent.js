import './BasicListComponent.html';

export default class BasicListComponent {
  constructor () {}

  onItemReady = (event) => {
    this.theListview = event.detail.cmp;
    const tpl =
    `<div>
        <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
        <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

    this.store = Ext.create('Ext.data.Store', { 
      autoLoad: true,
      proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
      },
      sorters: ['last_name', 'first_name']
    });

    this.theListview.setItemTpl(tpl);
    this.theListview.setStore(this.store);
  }

  onSelect = (event) => {
    const selected = event.detail.selected.data;
    Ext.toast(`You selected ${selected.first_name} ${selected.last_name}.`);
  }
}
