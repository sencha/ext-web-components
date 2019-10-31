import '../charttoolbar/ChartToolbar.js';
import './BoxPlotComponent.html';
import data from './BoxPlotComponentData.js';

Ext.require([
    'Ext.chart.CartesianChart',
    'Ext.chart.axis.Category',
    'Ext.chart.axis.Numeric',
    'Ext.chart.series.BoxPlot',
    'Ext.chart.series.Scatter'
]);

export default class BoxPlotComponent {
    constructor() {
        this.colors = [
            {
                fillStyle: '#96BBDC',
                strokeStyle: '#3F85C1'
            },
            {
                fillStyle: '#FAC796',
                strokeStyle: '#FDA34A'
            },
            {
                fillStyle: '#94D0AD',
                strokeStyle: '#47B371'
            },
            {
                fillStyle: '#E89BA6',
                strokeStyle: '#DE5465'
            },
            {
                fillStyle: '#BB7BBD',
                strokeStyle: '#8A168A'
            },
            {
                fillStyle: '#C6ABA5',
                strokeStyle: '#8C564B'
            }
        ];
        this.store = Ext.create('Ext.data.Store', {
            data
        });

        this.theme = 'default';
        this.menuCmpArray = [];
    }

    onMenuItemReady = (event) => {
        if (event.detail.cmp) {
          this.menuCmpArray.push(event.detail.cmp);
          event.detail.cmp.on('click', this.onThemeChange.bind(this));
        }
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
            minimum: 10,
            majorTickSteps: 8,
            grid: true,
            limits: [{
                value: 60,
                line: {
                    strokeStyle: 'red',
                    lineWidth: 2,
                    lineDash: [6, 3],
                    title: {
                        text: 'Theoretical mean: 60',
                        fontWeight: 'bold',
                        fillStyle: 'black',
                        fontSize: 14
                    }
                }
            }]
        }, {
            type: 'category',
            position: 'bottom'
        }]);
        this.cartesianCmp.setSeries([{
            type: 'boxplot',
            xField: 'field',
            store: this.store,
            highlight: true,
            style: {
                maxBoxWidth: 52,
                lineWidth: 2
            },
            renderer: this.onBoxPlotRender.bind(this),
            tooltip: {
                trackMouse: true,
                renderer: this.onBoxPlotTooltip.bind(this),
            }
        }, {
            type: 'scatter',
            xField: 'field',
            yField: 'age'
        }]);
    }

    onBoxPlotRender = (sprite, config, data, index) => {
        return this.colors[index % this.colors.length];
    };

    onBoxPlotTooltip = (tooltip, record) => {
        const category = record.get('field'),
            high = record.get('high'),
            q3 = record.get('q3'),
            median = record.get('median'),
            q1 = record.get('q1'),
            low = record.get('low');

        tooltip.setTitle(category);

        tooltip.setHtml(
            'High: ' + high
        + '<br>Q3: ' + q3
        + '<br>Median: ' + median
        + '<br>Q1: ' + q1
        + '<br>Low : ' + low
        );
    };
}
