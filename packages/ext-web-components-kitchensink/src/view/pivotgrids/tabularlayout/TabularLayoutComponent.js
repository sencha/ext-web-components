import './TabularLayoutComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class TabularLayoutComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      model: saleModel,
      data: generateData()
    });
    this.pivotgridMatrix = {
      type: 'local',
      store: this.store,
      viewLayoutType: 'tabular',
      aggregate: [{
          dataIndex: 'value',
          header: 'Total',
          aggregator: 'sum',
          width: 110
      }],
      leftAxis: [{
          dataIndex: 'person',
          header: 'Person',
          width: 150
      }, {
          dataIndex: 'company',
          header: 'Company',
          sortable: false,
          width: 150
      }, {
          dataIndex: 'country',
          header: 'Country',
          width: 150
      }],
      topAxis: [{
          dataIndex: 'year',
          header: 'Year'
      }]
    };
  }

  onPivotGridReady = (event) => {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
  }

  onButtonReady1 = (event) => {
    this.button1 = event.detail.cmp;
    this.button1.setHandler(this.expandAll.bind(this));
  }

  onButtonReady2 = (event) => {
    this.button2 = event.detail.cmp;
    this.button2.setHandler(this.collapseAll.bind(this));
  }

  expandAll = () => { this.pivotgrid.expandAll() }
  collapseAll = () => { this.pivotgrid.collapseAll() }
}
