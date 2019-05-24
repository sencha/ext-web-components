import '../../charttoolbar/ChartToolbar.js';
import './BasicColumnComponent.html';
import createData from './BasicColumnComponentData.js';

Ext.require([
    'Ext.chart.series.Bar',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category'
]);

export default class BasicColumnComponent {

    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: [
                'month',
                'high',
                'low',
                {
                    name: 'highF',
                    calculate: function(data) {
                        return data.high * 1.8 + 32;
                    }
                },
                {
                    name: 'lowF',
                    calculate: function(data) {
                        return data.low * 1.8 + 32;
                    }
                }
            ]
        });
        this.store.loadData(createData());

        this.theme = 'default';
        this.menuCmpArray = [];
    }

  onMenuItemReady = (event) => {
      this.menuCmpArray.push(event.detail.cmp);
      event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onRefreshButtonReady = (event) => {
      this.refreshButtonCmp = event.detail.cmp;
      this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick = () => {
      this.store.loadData(createData());
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
          type: 'numeric',
          position: 'left',
          minimum: 30,
          title: 'Temperature in °F'
      }, {
          type: 'category',
          position: 'bottom'
      }]);
      this.cartesianCmp.setSeries([{
          type: 'bar',
          xField: 'month',
          yField: 'highF'
      }]);
  }


}
