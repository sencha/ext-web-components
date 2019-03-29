import '../../charttoolbar/ChartToolbar.js';
import './BasicAreaComponent.html';
import createData from './BasicAreaComponentData.js';

Ext.require([
  'Ext.chart.theme.Midnight',
  'Ext.chart.theme.Green',
  'Ext.chart.theme.Muted',
  'Ext.chart.theme.Purple',
  'Ext.chart.theme.Sky',
  'Ext.chart.series.Area',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

export default class BasicAreaComponent {

  constructor () {

    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name'],
    });

    this.store.loadData(createData(25));
  }

  toolbarready(event) {
  }

  containerready(event) {
    this.cmp  = event.detail.cmp;
  }

  cartesianready(event) {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
  }

}
