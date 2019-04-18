import './BasicGaugeChartComponent.html';
import createData from './createData';

Ext.require([
  'Ext.chart.series.Gauge'
]);

export default class BasicGaugeChartComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name'],
    });
    this.store.loadData(createData(5));
  }

  onRefreshButtonReady(event) {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick(event) {
    this.store.loadData(createData(5));
  }

  chartRenderer(sprite, config, rendererData, spriteIndex) {
    let surface = sprite.getParent(),
    chart = rendererData.series.getChart(),
    mainRect = chart.getMainRect(),
    width = mainRect[2],
    height = mainRect[3],
    bigChart = (width >= 250 && height >= 150),
    changes, fontSize;
    if (config.type == "label") {
      changes = {
        x: config.x + 10,
        y: config.y + 10
      };
      if (spriteIndex == 3) {
        Ext.apply(changes, {
          fontSize: (bigChart ? 32 : 16),
          strokeStyle: 'black'
        });
      } else {
        Ext.apply(changes, {
          fontSize: (bigChart ? 24 : 12)
        });
      }
      switch (spriteIndex) {
        case 1:
          Ext.apply(changes, {
            color: 'blue'
          });
          break;
        case 3:
          Ext.apply(changes, {
            color: 'white'
          });
          break;
        case 5:
          Ext.apply(changes, {
            color: 'darkred'
          });
          break;
      }
      return changes;
    }
  };

  onPolarReady1(event) {
    const polar1 = event.detail.cmp;
    const polarSeries1 = [{
      type: 'gauge',
      angleField: 'g1',
      minimum: 100,
      maximum: 800,
      donut: 30,
      colors: ["#115fa6", "lightgrey"]
    }];
    polar1.setStore(this.store);
    polar1.setSeries(polarSeries1);
  }

  onPolarReady2(event) {
    const polar2 = event.detail.cmp;
    const polarSeries2 = [{
      type: 'gauge',
      angleField: 'g1',
      donut: 30,
      value: 60,
      minimum: 100,
      maximum: 800,
      needle: true,
      needleLength: 95,
      needleWidth: 8,
      totalAngle: Math.PI,
      label: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      colors: ['maroon', 'blue', 'lightgray', 'red'],
      sectors: [{
        end: 300,
        label: 'Cold',
        color: 'dodgerblue'
      }, {
        end: 300,
        style: {
          strokeStyle: 'black',
          strokeOpacity: 1,
          lineWidth: 4
        }
      }, {
        end: 600,
        label: 'Temp.',
        color: 'lightgray'
      }, {
        end: 600,
        style: {
          strokeStyle: 'black',
          strokeOpacity: 1,
          lineWidth: 4
        }
      }, {
        end: 800,
        label: 'Hot',
        color: 'tomato'
      }, {
        start: 0,
        style: {
          strokeStyle: 'gray',
          strokeOpacity: 1,
          lineWidth: 4,
          fillOpacity: 0
        }
      }],
      renderer: this.chartRenderer.bind(this)
    }];
    polar2.setStore(this.store);
    polar2.setSeries(polarSeries2);
  }
}
