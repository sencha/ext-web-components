import '../../charttoolbar/ChartToolbar.js';
import './Basic3DColumnComponent.html';
import createData from './Basic3DColumnComponentData.js';

Ext.require([
    'Ext.chart.interactions.PanZoom',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category',
    'Ext.chart.axis.Numeric3D',
    'Ext.chart.grid.HorizontalGrid3D',
    'Ext.chart.series.Bar3D',
    'Ext.chart.axis.Category3D'
]);
export default class Basic3DColumnComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
        });
        this.theme = 'default';
        this.menuCmpArray = [];
        this.store.loadData(createData(15));
    }


  onMenuItemReady = (event) => {
      if (event.detail.cmp) {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
      }
  }

  onRefreshButtonReady = (event) => {
      this.refreshButtonCmp = event.detail.cmp;
      this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick = () => {
      this.store.loadData(createData(15));
      this.cartesianCmp.setStore(this.store);

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
      this.cartesianCmp.setTheme(event.config.text.toLowerCase());
  }


  cartesianReady = (event) => {
      this.cartesianCmp = event.detail.cmp;
      this.cartesianCmp.setStore(this.store);
      this.cartesianCmp.setTheme(this.theme);
      this.cartesianCmp.setAxes([{
          type: 'numeric3d',
          position: 'left',
          fields: ['g1', 'g2', 'g3'],
          grid: true,
          label: {
              rotate: {
                  degrees: -30
              }
          }
      }, {
          type: 'category3d',
          position: 'bottom',
          fields: 'name'
      }]);
      this.cartesianCmp.setSeries([{
          type: 'bar3d',
          xField: 'name',
          yField: ['g1', 'g2', 'g3']
      }]);
  }
}
