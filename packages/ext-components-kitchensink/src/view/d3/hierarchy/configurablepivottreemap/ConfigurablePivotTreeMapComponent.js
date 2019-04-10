import './ConfigurablePivotTreemapComponent.html';
import createData from './createData';

Ext.require(['Ext.pivot.d3.TreeMap']);

export default class ConfigurablePivotTreemapComponent {
  constructor () {}

  containerReady(event) {
    this.pivotD3ContainerCmp = event.detail.cmp;
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
      data: createData()
    });

    const matrixVar = {
      store: createData(),
      aggregate: [{
          dataIndex: 'value',
          header: 'Value',
          aggregator: 'sum'
      }],
      leftAxis: [{
          dataIndex: 'person',
          header: 'Person'
      }]
    };

    const drawingVar = {
      xtype: 'pivottreemap',
      minHeight: 300,
      height: window.innerHeight-250
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

    const pivotElement = document.createElement("ext-pivotd3container");
    pivotElement.setAttribute('matrix', JSON.stringify(matrixVar));
    pivotElement.setAttribute('configurator', JSON.stringify(configuratorVar));
    pivotElement.setAttribute('drawing', JSON.stringify(drawingVar));
    pivotElement.setAttribute('layout', 'fit');
    pivotElement.setAttribute('height', '100%');

    this.pivotD3ContainerCmp.el.dom.appendChild(pivotElement)
    this.createdPivotFunc = pivotElement.ext;
    this.createdPivotFunc.on('beforeMoveConfigField', this.onBeforeAddConfigField.bind(this));
    this.createdPivotFunc.on('showConfigFieldSettings', this.onShowFieldSettings.bind(this));
    this.createdPivotFunc.on('showConfigPanel', this.onShowConfigPanel.bind(this));
  }

  showConfigurator() {
    this.createdPivotFunc.showConfigurator();
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

  onShowConfigPanel(panel) {
      panel.getLeftAxisHeader().getTitle().setText('Tree labels');
      panel.setTopAxisContainerVisible(false);
  }
}
