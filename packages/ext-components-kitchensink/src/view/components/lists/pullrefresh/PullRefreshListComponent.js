import './PullRefreshListComponent.html';

require('../stocks');

Ext.require([
  'Ext.plugin.PullRefresh'
]);

export default class PullRefreshListComponent {
  constructor () {
    console.log('in PullRefreshListComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['name'],
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/Company',
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
  }

  listready(event) {
    this.listCmp = event.detail.cmp;
    this.listCmp.setStore(this.store);
    this.listCmp.setItemTpl(`{name}`);
    this.listCmp.setPlugins([{ type: 'pullrefresh', mergeData: false }]);
  }

}
