import '../../charttoolbar/ChartToolbar.js';
import './StackedBarComponent.html';
import { createData } from './StackedBarComponentData.js';

Ext.require([
  'Ext.chart.interactions.PanZoom',
  'Ext.chart.series.Bar',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

export default class StackedBarComponent {

  constructor () {
    console.log('in StackedBarComponent constructor');

    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
    });
    this.store.loadData(createData(25));
    this.theme = 'default';
    this.menuCmpArray = [];

  }
  onMenuItemReady(event) {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onRefreshButtonReady(event) {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick(event) {
    this.store.loadData(createData(25));
    this.cartesianCmp.setStore(this.store);

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
    this.cartesianCmp.setTheme(event.config.text.toLowerCase());
  }

  cartesianready(event) {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setTheme(this.theme);
    this.cartesianCmp.setAxes([{
      type: 'numeric',
      position: 'bottom',
      fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
      grid: {
        even: {
          lineWidth: 1
        },
        odd: {
          stroke: '#fff'
        }
      },
      label: {
        rotate: {
          degrees: -90
        }
      },
      maxZoom: 1
    }, {
      type: 'category',
      position: 'left',
      fields: 'name',
      maxZoom: 4
    }]);
    this.cartesianCmp.setSeries([{
      type: 'bar',
      xField: 'name',
      yField: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6']
    }]);
  }
}
