import './PivotGridWidgetsComponent.html';
import { generateData, randomItem } from '../generateSaleData';
import saleModel from '../saleModel';

export default class PivotGridWidgetsComponent {
  constructor () {

    this.store = Ext.create('Ext.data.Store', {
      model: saleModel,
      data: generateData()
    });
    this.pivotgridMatrix = {
      type: 'local',
      store: this.store,
      textRowLabels: 'Custom header',
      compactViewColumnWidth: 210,
      viewLayoutType: 'compact',
      aggregate: [{
        dataIndex: 'value',
        header: 'Performance',
        aggregator: this.getPerformance,
        width: 90,
        column: {
            cell: {
                xtype: 'widgetcell',
                forceWidth: true,
                widget: {
                    xtype: 'sparklineline'
                }
            }
          }
      }, {
          dataIndex: 'value',
          header: 'Count',
          aggregator: 'count'
      }],
      leftAxis: [{
          dataIndex: 'person',
          header: 'Person'
      }, {
          dataIndex: 'company',
          header: 'Company',
          sortable: false
      }, {
          dataIndex: 'country',
          header: 'Country'
      }],
      topAxis: [{
          dataIndex: 'year',
          header: 'Year'
      }]
    };
  }

  onPivotGridReady(event) {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
  }

  onButtonReady1(event) {
    this.button1 = event.detail.cmp;
    this.button1.setHandler(this.addData.bind(this));
  }

  onButtonReady2(event) {
    this.button2 = event.detail.cmp;
    this.button2.setHandler(this.updateData.bind(this));

  }

  onButtonReady3(event) {
    this.button3 = event.detail.cmp;
    this.button3.setHandler(this.removeData.bind(this));
  }

  onButtonReady4(event) {
    this.button4 = event.detail.cmp;
    this.button4.setHandler(this.clearData.bind(this));
  }

  addData() {
    const data = generateData(6);
    for(let i=0; i<data.length; i++) {
      const record = data[i];
      record.person = 'Adrian';
      record.company = (i < 3 ? 'Microsoft' : 'Apple');
    }
    this.store.add(data);
  }

  updateData() {
    const data = generateData(1)[0],
    record = randomItem(this.store.data.items);
    if(record) record.set(data);
  }

  removeData() {
    const record = randomItem(this.store.data.items);
    if(record) this.store.remove(record);
  }

  clearData() { this.store.removeAll(); }

  getPerformance(records, dataIndex) {
    const ret = records.map(function(r) {return r.get(dataIndex)});
    return ret.length ? ret : null;
  }
}
