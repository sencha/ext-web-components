import '../../charttoolbar/ChartToolbar.js';
import './BasicBarComponent.html';

Ext.require([
    'Ext.chart.series.Bar',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category'
]);

export default class BasicBarComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['country', 'agr', 'ind', 'ser'],
            data: [
                { country: 'USA', agr: 188217, ind: 2995787, ser: 12500746 },
                { country: 'China', agr: 918138, ind: 3611671, ser: 3792665 },
                { country: 'Japan', agr: 71568, ind: 1640091, ser: 4258274 },
                { country: 'UK', agr: 17084, ind: 512506, ser: 1910915 },
                { country: 'Russia', agr: 78856, ind: 727906, ser: 1215198 }
            ]
        });
        this.theme = 'default';
        this.menuCmpArray = [];
    }

    onAxisLabelRender = (axis, label, layoutContext) => {
        return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
    }

    onSeriesLabelRender = (value) => {
        return Ext.util.Format.number(value/1000, '0,000');
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
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
        this.cartesianCmp.setAxes([
            {
                type: 'numeric',
                position: 'bottom',
                fields: 'ind',
                grid: true,
                maximum: 4000000,
                majorTickSteps: 10,
                title: 'Billions of USD',
                renderer: this.onAxisLabelRender.bind(this)
            },
            {
                type: 'category',
                position: 'left',
                fields: 'country',
                grid: true
            }]);
        this.cartesianCmp.setSeries([{
            type: 'bar',
            xField: 'country',
            yField: 'ind',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            label: {
                field: 'ind',
                display: 'insideEnd',
                renderer: this.onSeriesLabelRender.bind(this),
            }
        }]);
        this.cartesianCmp.setCaptions({
            title: {
                text: '2011 Industry size in major economies',
            },
            subtitle: {
                text: 'Source: http://en.wikipedia.org/wiki/List_of_countries_by_GDP_sector_composition',
            }
        });
    }
}
