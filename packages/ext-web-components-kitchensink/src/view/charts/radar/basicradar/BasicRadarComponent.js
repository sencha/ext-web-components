import './BasicRadarComponent.html';
import data from './data';

Ext.require([
    'Ext.chart.series.Scatter',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Category'
]);

export default class BasicRadarComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            data
        });
        this.theme = 'default';
        this.menuCmpArray = [];
    }

    onPolarReady = (event) => {
        this.polar = event.detail.cmp;
        const polarSeries = [{
            type: 'radar',
            angleField: 'month',
            radiusField: 'data1',
            style: {
                opacity: 0.80
            },
            highlight: {
                fillStyle: '#000',
                lineWidth: 2,
                strokeStyle: '#fff'
            }
        }];
        const polarAxes = [{
            type: 'numeric',
            position: 'radial',
            fields: 'data1',
            renderer: (axis, label, layoutContext) => layoutContext.renderer(label) + '%',
            grid: true,
            minimum: 0,
            maximum: 25,
            majorTickSteps: 4
        }, {
            type: 'category',
            position: 'angular',
            grid: true
        }];
        this.polar.setAxes(polarAxes);
        this.polar.setSeries(polarSeries);
        this.polar.setStore(this.store);
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }

    onThemeChange = (event) => {
        this.theme = event.config.text.toLowerCase();
        this.menuCmpArray.forEach(function(cmp, index) {
            if (index == parseInt(event.config.itemId)) {
                cmp.setIconCls('x-font-icon md-icon-done');
                return;
            }
            cmp.setIconCls('');
        });
        this.polar.setTheme(event.config.text.toLowerCase());
    }
}
