import './PagingListComponent.css';
import './PagingListComponent.html';
require('../stocks');

Ext.require('Ext.plugin.ListPaging');
export default class PagingListComponent {

  constructor () {
    console.log('in PagingListComponent constructor');

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
  // state = {
  //   bufferZone: false
  // }

  

  // componentDidUpdate(prevProps, prevState) {
  //   const { bufferZone } = this.state;

  //   if (prevState.bufferZone !== bufferZone) {
  //     const plugin = this.list.cmp.findPlugin('listpaging');
  //     console.log('got here');
  //     plugin.setAutoPaging(bufferZone !== false);
  //     plugin.setBufferZone(bufferZone);
  //   }
  // }

}
