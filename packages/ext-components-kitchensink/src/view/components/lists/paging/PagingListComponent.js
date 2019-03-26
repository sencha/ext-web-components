import './PagingListComponent.css';
import './PagingListComponent.html';

export default class PagingListComponent {
  constructor () {
    this.bufferZone = false;
  }

  setBufferZone(value) {
    this.bufferZone = value;
    const store = this.list.getStore()
    console.log(store);
    const plugin = this.list.findPlugin('listpaging');
    store.removeAll();
    plugin.setAutoPaging(value !== false);
    plugin.setBufferZone(value || 0);
    store.loadPage(1);
  }

  listReady(ele) {
    this.list = ele.detail.cmp;
    const tpl = `<div>{name}</div>`;
    const plugins = [{type: 'listpaging'}];

    this.store = Ext.create('Ext.data.Store', {
      fields: ['name'],
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/data/CompanyData.json',
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
    this.list.setPlugins(plugins);
  }
}
