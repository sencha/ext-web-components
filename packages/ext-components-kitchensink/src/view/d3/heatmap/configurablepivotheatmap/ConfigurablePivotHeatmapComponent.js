import './ConfigurablePivotHeatmapComponent.html';
import data from './salesData';

Ext.require('Ext.pivot.d3.HeatMap');

const regions = {
  "Belgium": 'Europe',
  "Netherlands": 'Europe',
  "United Kingdom": 'Europe',
  "Canada": 'North America',
  "United States": 'North America',
  "Australia": 'Australia'
};

export default class ConfigurablePivotHeatmapComponent {
  constructor () {
    // debugger;
    this.store = Ext.create('Ext.data.Store', {
      fields: [
          {name: 'id',        type: 'string'},
          {name: 'company',   type: 'string'},
          {name: 'country',   type: 'string'},
          {name: 'person',    type: 'string'},
          {name: 'date',      type: 'date', dateFormat: 'c'},
          {name: 'value',     type: 'float'},
          {name: 'quantity',  type: 'float'},
          {
            name: 'year',
            calculate: function(data){
              return parseInt(Ext.Date.format(data.date, "Y"), 10);
            }
          },{
            name: 'month',
            calculate: function(data){
              return parseInt(Ext.Date.format(data.date, "m"), 10) - 1;
            }
          },{
            name: 'continent',
            calculate: function(data){
              return regions[data.country];
            }
          }
      ],
      data: data
    });
  }

  mainContainerReady(event) {
    debugger;
    this.mainCtn = event.detail.cmp;
    const matrixVar = {
      store: this.store,
      aggregate: [{
        dataIndex: 'value',
        header: 'Value',
        aggregator: 'avg'
      }],
  
      leftAxis: [{
        dataIndex: 'person',
        header: 'Person'
      }],
  
      topAxis: [{
        dataIndex: 'year',
        header: 'Year'
      }]
    };
    const drawingVar = {
      xtype: 'pivotheatmap',
  
      legend: {
        items: {
          count: 10
        }
      },
  
      tooltip: {
        renderer: this.onTooltip.bind(this)
      },
  
      platformConfig: {
        phone: {
          tiles: {
            cls: 'phone-tiles'
          }
        },
        tablet: {
          tiles: {
            cls: 'tablet-tiles'
          }
        }
      }
    };
    const configuratorVar = {
      fields: [{
        dataIndex:  'quantity',
        header:     'Qty',
        aggregator: 'sum',
        formatter: 'number("0")',
  
        settings: {
          allowed: ['aggregate'],
          style: {
            fontWeight: 'bold'
          },
          formatters: {
            '0': 'number("0")',
            '0%': 'number("0%")'
          }
        }
      }, {
          dataIndex:  'value',
          header:     'Value',
  
          settings: {
            allowed: 'aggregate',
            aggregators: ['sum', 'avg', 'count'],
            style: {
              fontWeight: 'bold'
            },
            formatters: {
              '0': 'number("0")',
              '0.00': 'number("0.00")',
              '0,000.00': 'number("0,000.00")',
              '0%': 'number("0%")',
              '0.00%': 'number("0.00%")'
            }
          }
      }, {
        dataIndex:  'company',
        header:     'Company',
  
        settings: {
          aggregators: ['count']
        }
      }, {
        dataIndex:  'country',
        header:     'Country',
  
        settings: {
          aggregators: ['count']
        }
      }, {
        dataIndex: 'person',
        header: 'Person',
  
        settings: {
          aggregators: 'count'
        }
      }, {
        dataIndex:  'year',
        header:     'Year',
  
        settings: {
          allowed: ['leftAxis', 'topAxis']
        }
      }, {
        dataIndex:      'month',
        header:         'Month',
        labelRenderer:  'monthLabelRenderer',
  
        settings: {
          allowed: ['leftAxis', 'topAxis']
        }
      }]
    };

    const pivotD3Container = document.createElement('ext-pivotd3container');
    pivotD3Container.setAttribute('configurator', configuratorVar);
    pivotD3Container.setAttribute('matrix', matrixVar);
    pivotD3Container.setAttribute('drawing', drawingVar);
    pivotD3Container.setAttribute('shadow', true);
    pivotD3Container.setAttribute('layout', "fit");
    pivotD3Container.setAttribute('onBeforeMoveConfigField', this.onBeforeAddConfigField.bind(this));
    pivotD3Container.setAttribute('onShowConfigFieldSettings', this.onShowFieldSettings.bind(this));

    debugger;
    this.mainCtn.el.dom.appendChild(pivotD3Container);
    // this.mainCtn.on('onBeforeMoveConfigField', this.onBeforeAddConfigField.bind(this));
    // this.mainCtn.on('onShowConfigFieldSettings', this.onShowFieldSettings.bind(this));
  }

  showConfigurator() {
    this.mainCtn.showConfigurator();
  }

  onBeforeAddConfigField(panel, config) {
    const dest = config.toContainer,
    store = dest.getStore()

    if(dest.getFieldType() !== 'all' && store.getCount() >= 1) {
      store.removeAll();
    }
  }

  onShowFieldSettings(panel, config) {
    const align = config.container.down('[name=align]');
    if(align) {
      align.hide();
    }
  }

  onTooltip(component, tooltip, datum) {
    const d = datum.data,
          x = component.getXAxis().getField(),
          y = component.getYAxis().getField(),
          z = component.getColorAxis().getField();

    tooltip.setHtml(
      '<div>X: ' + d[x] + '</div>' +
      '<div>Y: ' + d[y] + '</div>' +
      '<div>Z: ' + d[z] + '</div>' +
      '<div>Records: ' + d.records + '</div>'
    );
  }

  onButtonReady(event) {
    this.btn = event.detail.cmp;
    this.btn.setHandler(this.showConfigurator.bind(this));
  }
}
