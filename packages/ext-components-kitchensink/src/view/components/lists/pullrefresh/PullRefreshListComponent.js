import './PullRefreshListComponent.html';
// import '../stocks.js';

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
          // url: '/KitchenSink/Company',
          reader: {
              type: 'json',
              rootProperty: 'data',
              // Do not attempt to load orders inline.
              // They are loaded through the proxy
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
