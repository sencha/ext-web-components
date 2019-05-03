import './XMLGridComponent.html';

export default class XMLGridComponent {
  constructor () {}

  ready = (event) => {
    const grid = event.detail.cmp;
    const store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      fields:[
        {name: 'Author', mapping: '@author.name'},
        'Title',
        'Manufacturer',
        'ProductGroup'
      ],
      proxy:{
        type: 'ajax',
        url: 'resources/data/Grids/sheldon.xml',
        reader: {
          type: 'xml',
          record: 'Item',
          idProperty: 'ASIN',
          totalRecords: '@total'
        }
      }
    });

    grid.setStore(store);
  }
}
