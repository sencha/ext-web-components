import './MultiaxisComponent.html';
import generateData from './generateData';

export default class MultiaxisComponent {
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
        this.theme = 'default';
        this.menuCmpArray = [];
        this.store.loadData(generateData());
    }

    onPolarReady = (event) => {
        this.polar = event.detail.cmp;
        const polarSeries = [{
            type: 'radar',
            angleField: 'month',
            radiusField: 'high',
            style: {
                globalAlpha: 0.7
            }
        }];
        const polarAxes = [{
            type: 'category',
            position: 'angular',
            id: 'main-angular-axis',
            grid: true,
            style: {
                majorTickSize: 20,
                strokeStyle: 'rgb(73,112,142)'
            }
        }, {
            type: 'category',
            position: 'angular',
            linkedTo: 'main-angular-axis',
            renderer: this.onMultiAxisLabelRender,
            floating: {
                value: 20,
                alongAxis: 'radial-axis'
            }
        }, {
            type: 'numeric',
            id: 'radial-axis',
            position: 'radial',
            label: {
                fontWeight: 'bold'
            },
            floating: {
                value: 'Jan',
                alongAxis: 'main-angular-axis'
            }
        }];
        this.polar.setAxes(polarAxes);
        this.polar.setSeries(polarSeries);
        this.polar.setStore(this.store);
    }

    onMenuItemReady = (event) => {
        if (event.detail.cmp) {
          this.menuCmpArray.push(event.detail.cmp);
          event.detail.cmp.on('click', this.onThemeChange.bind(this));
        }
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

    onRefreshButtonReady = (event) => {
        this.refreshButtonCmp = event.detail.cmp;
        this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
    }

    onRefreshClick = () => {
        this.store.loadData(generateData());
    }
}
