import model from '../../CompanyModel';
import './EditableGridComponent.html';

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
