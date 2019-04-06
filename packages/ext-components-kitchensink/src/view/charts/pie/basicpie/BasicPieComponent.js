import './BasicPieComponent.html';
import createData from './createData';
import '../../charttoolbar/ChartToolbar.js';

Ext.require([
  'Ext.chart.series.Pie'
]);

export default class BasicPieComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name'],
    });
    this.store.loadData(createData(5));
    this.theme = 'default';
    this.menuCmpArray = [];
  }

  onPolarReady(event) {
    this.polar = event.detail.cmp;
    const series = [{ "type": "pie", "xField": "g1", "label": { "field": "name"} }];
    this.polar.setSeries(series);
    this.polar.setStore(this.store);
  }

  onMenuItemReady(event) {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onThemeChange(event) {
    this.theme = event.config.text.toLowerCase();
    this.menuCmpArray.forEach((cmp, index) => {
      if (index == parseInt(event.config.itemId)) {
        cmp.setIconCls('x-font-icon md-icon-done');
        return;
      }
      cmp.setIconCls('');
    });
    this.polar.setTheme(event.config.text.toLowerCase());
  }

  onRefreshButtonReady(event) {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick(event) {
    this.store.loadData(createData(5));
    this.polar.setStore(this.store);
  }
}
