import './RangeEditorPluginComponent.html';
import { generateData } from '../generateSaleData';
import SaleModel from '../saleModel';

export default class RangeEditorPluginComponent {
  constructor () {

    this.store = Ext.create('Ext.data.Store', {
      model: SaleModel,
      data: generateData()
    });
    this.pivotgridMatrix = {
      type: 'local',
      store: this.store,
      aggregate: [{
          dataIndex: 'value',
          header: 'Total',
          aggregator: 'sum',
          width: 120
      }],
      leftAxis: [{
          dataIndex: 'company',
          header: 'Company',
          width: 120
      }, {
          dataIndex: 'country',
          header: 'Country',
          direction: 'DESC',
          width: 150
      }],
      topAxis: [{
          dataIndex: 'year',
          header: 'Year'
      }, {
          dataIndex: 'month',
          header: 'Month',
          labelRenderer: value => Ext.Date.monthNames[value]
      }]
    };
  }

  onPivotGridReady(event) {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);

  }

  onButtonReady1(event){
    this.button1 = event.detail.cmp;
    this.button1.setHandler(this.expandAll.bind(this));
  }

  onButtonReady2(event){
    this.button2 = event.detail.cmp;
    this.button2.setHandler(this.collapseAll.bind(this));
  }

  collapseAll() { this.pivotgrid.collapseAll(); }
  expandAll() { this.pivotgrid.expandAll(); }
}
