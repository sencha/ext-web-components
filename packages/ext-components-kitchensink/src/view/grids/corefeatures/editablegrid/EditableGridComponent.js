import model from '../CompanyModel';

Ext.require([
  'Ext.grid.plugin.Editable',
  'Ext.grid.plugin.CellEditing',
  'Ext.data.validator.Presence',
  'Ext.data.validator.Number',
  'Ext.data.validator.Date'
]);

export default class EditableGridComponent {
  constructor () {}

  onReady(event) {
    debugger;
    const store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: 'ajax',
        url: 'resources/data/CompanyData.json',
      }
    });

    const editableGrid = event.detail.cmp;
    editableGrid.setStore(store);
  }
}



//
//
// signTpl = (field, format, data) => {
//   const value = data[field];
//   return (
//     <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
//       {Ext.util.Format.number(value, format)}
//     </span>
//   )
// }
//
// createSignTpl = format => new Template(value => (
//       <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
//           {Ext.util.Format.number(value, format)}
//       </span>
//   ));
//
//   renderSign = (format, value) => (
//       <span style={{ color: value > 0 ? 'green' : value < 0 ? 'red' : ''}}>
//           {Ext.util.Format.number(value, format)}
//       </span>
//   )
