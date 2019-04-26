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

  changeColumnReady(event) {
    this.changeColumn = event.detail.cmp;
    this.changeColumn.setRenderer(this.renderSign.bind(this, '0.00'));
  }
  percentChangeColumnReady(event) {
    this.pctChangeColumn = event.detail.cmp;
    this.pctChangeColumn.setRenderer(this.renderSign.bind(this, '0.00%'));
  }

  renderSign(format, value, record, dataIndex, cell, column) {
    if(value>0) {
      cell.setCls('greenClass');
    }
    else if(value<0){
      cell.setCls('redClass');
    }

    return Ext.util.Format.number(value, format)
  }
}
