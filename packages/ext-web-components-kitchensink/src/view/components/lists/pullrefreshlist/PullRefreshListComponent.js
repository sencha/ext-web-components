import './PullRefreshListComponent.html';
//import '../stocks.js';

Ext.require([
  'Ext.plugin.PullRefresh'
]);

export default class PullRefreshListComponent {
  constructor () {}

  listReady(event) {
    this.list = event.detail.cmp;
    const tpl = `<div>{name}</div>`;
    this.store = Ext.create('Ext.data.Store', {
      fields: ['name'],
      autoLoad: true,
      proxy: {
          type: 'ajax',
          url: '/KitchenSink/Companies',
          reader: {
              type: 'json',
              rootProperty: 'data',
              implicitIncludes: false
          },
          extraParams: {
              shuffle: true
          }
      }
    });
    this.list.setStore(this.store);
    this.list.setItemTpl(tpl);
  }

}
