import './DrilldownPluginComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class DrilldownPluginComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      model: saleModel,
      data: generateData()
    });
    this.monthRenderer = function(value) {return Ext.Date.monthNames[value]} ;
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
          header: 'Company'
      }, {
          dataIndex: 'country',
          header: 'Country',
          direction: 'DESC'
      }],
      topAxis: [{
          dataIndex: 'year',
          header: 'Year'
      }, {
          dataIndex: 'month',
          header: 'Month',
          labelRenderer: this.monthRenderer
      }]
    };
  }

  onPivotGridReady = (event) => {
    this.pivotgrid = event.detail.cmp;
    const plugin = [{ type: 'pivotdrilldown' }];
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
    this.pivotgrid.setPlugins(plugin);
  }

   onButtonReady1 = (event) => {
    this.button1 = event.detail.cmp;
    this.button1.setHandler(this.expandAll.bind(this));
  }

   onButtonReady2 = (event) => {
    this.button2 = event.detail.cmp;
    this.button2.setHandler(this.collapseAll.bind(this));
  }

  collapseAll() { this.pivotgrid.collapseAll(); }
  expandAll() { this.pivotgrid.expandAll(); }
}
