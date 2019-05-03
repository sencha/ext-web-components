import './ThreeDColumnWithRendererComponent.html';
import { colors, storeData } from './ThreeDColumnWithRendererComponentData.js';
Ext.require([
  'Ext.chart.interactions.PanZoom',
  'Ext.chart.axis.Numeric',
  'Ext.chart.axis.Category',
  'Ext.chart.axis.Numeric3D',
  'Ext.chart.grid.HorizontalGrid3D',
  'Ext.chart.series.Bar3D',
  'Ext.chart.axis.Category3D'
]);
export default class ThreeDColumnWithRendererComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],
      data: storeData
    });
  }

  onDownloadButtonReady = (event) => {
    this.downloadButtonCmp = event.detail.cmp;
    this.downloadButtonCmp.on('tap', this.downloadChart.bind(this));
  }

  downloadChart() {
    if (Ext.is.Desktop) {
      this.cartesianCmp.download({ filename: 'Chart' });
    } else {
      this.cartesianCmp.preview();
    }
  }

  cartesianReady = (event) => {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setAxes([
      {
        type: 'numeric3d',
        fields: 'data3',
        position: 'left',
        grid: true,
        renderer: (axis, label, layoutContext) => layoutContext.renderer(label) + '%'
      },
      {
        type: 'category3d',
        fields: 'month',
        position: 'bottom',
        grid: true,
        label: {
          rotate: {
            degrees: '-60'
          }
        },
      }
    ]);

    this.cartesianCmp.setSeries([
    {
      type: 'bar3d',
      xField: 'month',
      yField: 'data3',
      label: {
        field: 'data3',
        display: 'over'
      },
      highlight: {
        fillStyle: 'rgba(43, 130, 186, 1.0)',
        strokeStyle: 'rgba(0, 0, 0, .2)',
        showStroke: true,
        lineWidth: 2
      },
      tooltip: {
        trackMouse: true,
        showDelay: 0,
        dismissDelay: 0,
        hideDelay: 0,
        renderer: (tooltip, record, item) => { tooltip.setHtml(record.get('month') + ': ' + record.get('data3') + '%'); }
      },
      renderer: (sprite, config, data, index) => {
        return {
          fillStyle: colors[index],
          strokeStyle: index % 2 ? 'none' : 'black',
          opacity: index % 2 ? 1 : 0.5
        };
      }
    }
  ]);
  this.cartesianCmp.setTheme('muted');
  this.cartesianCmp.setStore(this.store);
  }
}
