import './ConfigurablePivotHeatmapComponent.html';
import data from './salesData';
Ext.require('Ext.pivot.d3.HeatMap');

export default class ConfigurablePivotHeatmapComponent {
  constructor () {}
  containerReady(event) {
    debugger;
    const regions = {
      "Belgium": 'Europe',
      "Netherlands": 'Europe',
      "United Kingdom": 'Europe',
      "Canada": 'North America',
      "United States": 'North America',
      "Australia": 'Australia'
    };

    const store = Ext.create('Ext.data.Store', {
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
      data
    });

    const matrixVar = {
      store: data,
      aggregate: [{
          dataIndex: 'value',
          header: 'Value',
          aggregator: 'avg'
      }],

      leftAxis: [{
          dataIndex: 'person',
          header: 'Person',
      }],

      topAxis: [{
          dataIndex: 'year',
          header: 'Year',
      }]
    };

    const drawingVar = {
      xtype: 'pivotheatmap',
      legend: {
        items: {
          count: '10'
        }
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
    const configuratorVar =  {
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

    this.pivotD3ContainerCmp = event.detail.cmp;
    const pivotElement = document.createElement("ext-pivotd3container");
    pivotElement.setAttribute('matrix', JSON.stringify(matrixVar));
    pivotElement.setAttribute('configurator', JSON.stringify(configuratorVar));
    pivotElement.setAttribute('drawing', JSON.stringify(drawingVar));
    this.pivotD3ContainerCmp.el.dom.append(pivotElement);
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
