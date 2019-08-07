import './FilledComponent.html';
import generateData from './generateData';

export default class FilledComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
        });
        this.theme = 'default';
        this.menuCmpArray = [];
        this.numRecords = 15;
        this.store.loadData(generateData(this.numRecords));
    }

    onPolarReady = (event) => {
        this.polarCmp = event.detail.cmp;
        const polarSeries = [{
            type: 'radar',
            title: 'G1',
            xField: 'id',
            yField: 'g1',
            style: {
                lineWidth: 4,
                fillOpacity: 0.3
            }
        }, {
            type: 'radar',
            title: 'G2',
            xField: 'id',
            yField: 'g2',
            style: {
                lineWidth: 4,
                fillOpacity: 0.3
            }
        }];
        const polarAxes = [{
            type: 'numeric',
            position: 'radial',
            fields: ['g1', 'g2'],
            grid: true,
            style: {
                estStepSize: 20
            },
            limits: {
                value: 500,
                line: {
                    strokeStyle: 'red',
                    lineDash: [6, 3],
                    title: {
                        text: 'Limit #1'
                    }
                }
            }
        }, {
            type: 'category',
            position: 'angular',
            margin: 20,
            fields: 'id',
            grid: true,
            style: {
                estStepSize: 2
            },
            limits: [{
                value: 12,
                line: {
                    strokeStyle: 'green',
                    lineWidth: 3,
                    lineDash: [6, 3],
                    title: {
                        text: 'Limit #2',
                        fontSize: 14
                    }
                }
            }, {
                value: 7,
                line: {
                    strokeStyle: 'green',
                    lineWidth: 3
                }
            }]
        }];
        this.polarCmp.setAxes(polarAxes);
        this.polarCmp.setSeries(polarSeries);
        this.polarCmp.setStore(this.store);
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
        this.polarCmp.setTheme(event.config.text.toLowerCase());
    }

    onRefreshButtonReady = (event) => {
        this.refreshButtonCmp = event.detail.cmp;
        this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
    }

    onRefreshClick = () => {
        this.store.loadData(generateData(this.numRecords));
    }
}
