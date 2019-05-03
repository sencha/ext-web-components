import './PullRefreshListComponent.html';

Ext.require([
  'Ext.plugin.PullRefresh'
]);

export default class PullRefreshListComponent {
  constructor () {}

  listReady = (event) => {
    this.list = event.detail.cmp;
    this.list.setItemTpl('<div>{name}</div>');

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

    const plugin = this.list.findPlugin('pullrefresh');
    this.list.setStore(this.store);
  }

  rewriteStore = () => {
    debugger;
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
  }
}
