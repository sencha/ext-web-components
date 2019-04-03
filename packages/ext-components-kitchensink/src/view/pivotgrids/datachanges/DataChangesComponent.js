import './DataChangesComponent.html';
import { generateData, randomItem } from '../generateSaleData';
import SaleModel from '../SaleModel';

export default class DataChangesComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      autoDestroy: true,
      model: SaleModel,
      proxy: { type: 'memory' }
    });
    this.pivotMatrix = {
      type: 'local',
      store: this.store,
      aggregate: [
        {
          dataIndex: 'value',
          header: 'Total',
          aggregator: 'sum'
        }, 
        {
          dataIndex: 'value',
          header: 'Count',
          aggregator: 'count'
        }
      ],
      leftAxis: [
        {
          dataIndex: 'year',
          header: 'Year'
        }, 
        {
          dataIndex: 'person',
          header: 'Person'
        }
      ],
      topAxis: [
        {
          dataIndex: 'country',
          header: 'Country'
        }
      ]
    }
  }

  onPivotGridReady(event) {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setMatrix(this.pivotMatrix);
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
    this.store.add(generateData(1)); 
  }

  updateData() { 
    const data = generateData(1)[0],
    record = randomItem(this.store.data.items);
    if(record) {
      record.set(data);
    }
  }

  removeData() {
    const record = randomItem(this.store.data.items);
    if(record) {
      this.store.remove(record);
    }
  }

  clearData() { 
    this.store.removeAll(); 
  }
}
