import './GroupedListComponent.html';

export default class GroupedListComponent {
  constructor () {}

  onItemReady(event) {
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
      grouper: {
        groupFn: this.groupFn.bind(this)
      },
      sorters: ['last_name', 'first_name']
    });
    this.theListview.setItemTpl(tpl);
    this.theListview.setStore(this.store);
    this.theListview.setIndexBar({ autoHide: false });
  }

  groupFn(record) {
    return record.get('last_name')[0];
  }

  onSelect(event) {
    const selected = event.detail.selected.data;
    Ext.toast(`You selected ${selected.first_name} ${selected.last_name}.`);
  }
}
