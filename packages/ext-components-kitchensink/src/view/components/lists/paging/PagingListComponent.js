import './PagingListComponent.html';
import '../stocks.js';

Ext.require('Ext.plugin.ListPaging');

export default class PagingListComponent {
  constructor () {
    this.bufferZone = false;
  }

  onContainerReady(event) {
    this.list1 = event.detail.cmp;
  }

  setBufferZone(value) {
    this.bufferZone = value;
    let labelText;

    if (this.bufferZone === false) {
      labelText = '<b>Auto Paging</b>: OFF';
    }
    else{
      labelText = `<b>Auto Paging</b>: ON (buffer zone: ${this.bufferZone})`;
    }

    this.list1.setHtml(labelText);
    const plugin = this.list.findPlugin('listpaging');
    this.store.removeAll();
    plugin.setAutoPaging(value !== false);
    plugin.setBufferZone(value || 0);
    this.store.loadPage(1);
  }

  listReady(ele) {
    this.list = ele.detail.cmp;
    const tpl = `<div>{name}</div>`;

    this.store = Ext.create('Ext.data.Store', {
      fields: ['name'],
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/Company',
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
    this.list.setItemTpl(tpl);
    this.list.setStore(this.store);
  }
}
