import './PurchasesByDayComponent.html';
import storeData from './storeData';

export default class PurchasesByDayComponent {
  constructor () {}

  mainCompReady(event) {
    debugger;
    this.d3HeatMap = event.detail.cmp;

    const store = Ext.create('Ext.data.Store', {
      fields: [
          {name: 'date', type: 'date', dateFormat: 'Y-m-d'},
          'bucket',
          'count'
      ],
      data: storeData
    });

    debugger;
    this.d3HeatMap.setStore(store);
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }
}
