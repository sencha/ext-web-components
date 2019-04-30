import '../../charttoolbar/ChartToolbar.js';
import './CandlestickComponent.html';
import createData from './CandlestickComponentData.js';

Ext.require([
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Time',
  'Ext.chart.series.CandleStick',
  'Ext.chart.interactions.Crosshair'
]);

export default class CandlestickComponent {

  constructor () {
    console.log('in CandlestickComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['time', 'open', 'high', 'low', 'close']
    });
    this.theme = "default";
    this.menuCmpArray = [];
    this.stacked = 0;
    this.store.loadData(createData(1000));
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
    this.store.loadData(createData(1000));
    this.cartesianCmp.setStore(this.store);
  }

  onStackButtonReady(event) {
    this.stackButtonCmp = event.detail.cmp;
    this.stackButtonCmp.on('tap', this.onStackedToggle.bind(this, { value: 0 }));
  }

  onGroupButtonReady(event) {
    this.groupButtonCmp = event.detail.cmp;
    this.groupButtonCmp.on('tap', this.onStackedToggle.bind(this, { value: 1 }));
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
    this.toggleCrosshair(false);
    this.cartesianCmp.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
  };

  onCrosshairButtonReady(event) {
    this.crosshairButtonCmp = event.detail.cmp;
    this.crosshairButtonCmp.on('tap', this.toggleCrosshair.bind(this));
  }

  toggleCrosshair(crosshair) {
    this.cartesianCmp.getInteraction('panzoom').setEnabled(!crosshair);
    this.cartesianCmp.getInteraction('crosshair').setEnabled(crosshair);
  }

  onStackedToggle(event) {
    if (event.value == 0) {
      this.stacked = 1;
    } else {
      this.stacked = 0;
    }

    this.cartesianCmp.getSeries()[0].setStacked(this.stacked);
    this.cartesianCmp.redraw();
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

  cartesianReady(event) {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setTheme(this.theme);
    this.cartesianCmp.setAxes([
      {
        type: 'numeric',
        fields: ['open', 'high', 'low', 'close'],
        position: 'left',
        maximum: 1000,
        minimum: 0
      },
      {
        type: 'time',
        fields: ['time'],
        position: 'bottom',
        visibleRange: [0, 0.3],
        style: {
          axisLine: false
        }
      }
    ]);
    this.cartesianCmp.setSeries({
      type: 'candlestick',
      xField: 'time',
      openField: 'open',
      highField: 'high',
      lowField: 'low',
      closeField: 'close',
      style: {
        barWidth: 10,
        opacity: 0.9,
        dropStyle: {
          fill: 'rgb(237,123,43)',
          stroke: 'rgb(237,123,43)'
        },
        raiseStyle: {
          fill: 'rgb(55,153,19)',
          stroke: 'rgb(55,153,19)'
        }
      }
    });
    this.cartesianCmp.setInteractions([
      {
        type: 'panzoom',
        axes: {
          left: {
            allowPan: false,
            allowZoom: false
          },
          bottom: {
            allowPan: true,
            allowZoom: true
          }
        }
      },
      {
        type: 'crosshair',
        axes: {
          label: {
            fillStyle: 'white'
          },
          rect: {
            fillStyle: '#344459',
            opacity: 0.7,
            radius: 5
          }
        }
      }
    ]);
  }

}
