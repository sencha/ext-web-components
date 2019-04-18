import '../../charttoolbar/ChartToolbar.js';
import './BasicScatterComponent.html';
import createData from './BasicScatterComponentData.js';

Ext.require([
  'Ext.chart.*',
  'Ext.chart.series.Scatter',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category'
]);

export default class BasicScatterComponent {

  constructor () {
    console.log('in BasicScatterComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
    });
    this.theme = "default";
    this.menuCmpArray = [];
    this.zoom = false;
    this.store.loadData(createData(25));

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

  onZoomButtonReady(event) {
    this.zoomButtonCmp = event.detail.cmp;
    this.zoomButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, true));
  }

  onPanButtonReady(event) {
    this.panButtonCmp = event.detail.cmp;
    this.panButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, false));
  }

  toggleZoomOnPan(zoomOnPan) {
    //Added cmp to access component attributes in ext-react16 [revisit]
    this.cartesianCmp.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
  };

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
      position: 'left',
      fields: ['g1', 'g2', 'g3', 'g4'],
      visibleRange: [0, 1],
      style: {
        estStepSize: 20
      },
      label: {
        rotate: {
          degrees: -30
        }
      }
    }, {
      type: 'category',
      position: 'bottom',
      visibleRange: [0, 0.5],
      fields: 'id'
    }]);
    this.cartesianCmp.setSeries([{
      type: 'scatter',
      xField: 'id',
      yField: 'g1',
      title: 'Group 1',
      highlightCfg: {
        strokeStyle: 'red',
        lineWidth: 5
      },
      marker: {
        type: 'path',
        path: [
          ['M', 0, 1],
          ['L', 1, 0],
          ['L', 0, -1],
          ['L', -1, 0],
          ['Z']
        ],
        scale: 10,
        lineWidth: 2
      }
    }, {
      type: 'scatter',
      xField: 'id',
      yField: 'g2',
      title: 'Group 2',
      highlightCfg: {
        strokeStyle: 'red',
        lineWidth: 5
      },
      marker: {
        type: 'circle',
        radius: 10,
        lineWidth: 2
      }
    }]);
    this.cartesianCmp.setInteractions([ 'panzoom', 'itemhighlight' ]);
  }

}
