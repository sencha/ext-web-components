import './NavigationComponent.html';
import '../charttoolbar/ChartToolbar.js';
import { createData } from './createData';

Ext.require([
  'Ext.chart.series.Line',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Time',
  'Ext.chart.navigator.Container'
]);

export default class NavigationComponent {
  constructor () {
    const data = createData();
    this.store = Ext.create('Ext.data.Store', {
      fields: ['x', 'sin', 'cos'],
      data,
    });
    this.theme = 'default';
    this.zoom = false;
    this.isPhone = Ext.os.is.Phone;
    this.menuCmpArray = [];
  }

  onNavigatorReady = (event) => {
    this.navigatorComp = event.detail.cmp;
    this.navigatorComp.getChart().getAxes()[1].setRenderer(this.categoryRenderer.bind(this));
    this.navigatorComp.getChart().setStore(this.store);
  }

  onZoomButtonReady = (event) => {
    this.zoomButtonCmp = event.detail.cmp;
    this.zoomButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, true));
  }

  onPanButtonReady = (event) => {
    this.panButtonCmp = event.detail.cmp;
    this.panButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, false));
  }

  toggleZoomOnPan(zoomOnPan) {
    this.navigatorComp.getChart().getInteraction('panzoom').setZoomOnPan(zoomOnPan);
  };

  onMenuItemReady = (event) => {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onThemeChange = (event) => {
    this.theme = event.config.text.toLowerCase();
    this.menuCmpArray.forEach((cmp, index) => {
      if (index == parseInt(event.config.itemId)) {
        cmp.setIconCls('x-font-icon md-icon-done');
        return;
      }
      cmp.setIconCls('');
    });
    this.navigatorComp.getChart().setTheme(event.config.text.toLowerCase());
  }

  categoryRenderer = (axis, value) => {
    return Math.round(value * 180 / Math.PI);
  };
}
