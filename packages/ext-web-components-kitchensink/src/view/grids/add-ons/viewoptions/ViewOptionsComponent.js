import './ViewOptionsComponent.scss';
import './ViewOptionsComponent.html';
import model from '../../data/CompanyModel';

Ext.require(['Ext.grid.plugin.ViewOptions']);

export default class ViewOptionsComponent {
  constructor () {}

  gridReady(event) {
    const store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/data/CompanyData.json',
      }
    })

    this.grid = event.detail.cmp;
    this.grid.setStore(store);
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
