import './ConfigurablePivotHeatmapComponent.html';
import data from './salesData';

Ext.require('Ext.pivot.d3.HeatMap');

export default class ConfigurablePivotHeatmapComponent {
    containerReady = (event) => {
        this.pivotD3ContainerCmp = event.detail.cmp;
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
            minHeight: 300,
            height: window.innerHeight-210,
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
                settings: {
                    allowed: ['leftAxis', 'topAxis']
                }
            }]
        };

        const pivotElement = document.createElement('ext-pivotd3container');
        pivotElement.setAttribute('matrix', JSON.stringify(matrixVar));
        pivotElement.setAttribute('configurator', JSON.stringify(configuratorVar));
        pivotElement.setAttribute('drawing', JSON.stringify(drawingVar));
        pivotElement.setAttribute('layout', 'fit');

        this.pivotD3ContainerCmp.el.dom.appendChild(pivotElement);
        this.createdPivotFunc = pivotElement.ext;
        this.createdPivotFunc.on('beforeMoveConfigField', this.onBeforeAddConfigField.bind(this));
        this.createdPivotFunc.on('showConfigFieldSettings', this.onShowFieldSettings.bind(this));
        this.createdPivotFunc.innerItems[0].setTooltip({ renderer: this.onTooltip.bind(this) });
        const configurator = this.createdPivotFunc.getConfigurator();
        configurator.getFields().items[6].setLabelRenderer((value) => Ext.Date.monthNames[value]);
    }

    showConfigurator = () => {
        this.createdPivotFunc.showConfigurator();
    }

    onBeforeAddConfigField = (panel, config) => {
        const dest = config.toContainer,
            store = dest.getStore();

        if(dest.getFieldType() !== 'all' && store.getCount() >= 1) {
            store.removeAll();
        }
    }

    onShowFieldSettings = (panel, config) => {
        const align = config.container.down('[name=align]');
        if(align) {
            align.hide();
        }
    }

    onTooltip = (component, tooltip, datum) => {
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
}
