import './SalesPerEmployeeComponent.html';
import { refreshData, refreshSize } from './createData';

export default class SalesPerEmployeeComponent {

    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: [
                {name: 'employee', type: 'string'},
                {name: 'dayNumber', type: 'int'},
                {name: 'day', type: 'string'},
                {name: 'sales', type: 'number'}
            ]
        });
        this.store.loadData(refreshData());
    }

    onHeatMapReady = (event) => {
        this.heatmapCmp = event.detail.cmp;
        const platformConfigVar = {
            padding: {
                top: 40,
                right: 30,
                bottom: 70,
                left: 120
            },
            legend: {
                docked: 'right',
                padding: 50,
                items: {
                    count: 10,
                    slice: [1],
                    reverse: true,
                    size: {
                        x: 60,
                        y: 30
                    }
                }
            }
        };
        const color = {
            scale: {
                type: 'linear',
                range: ['#ffffd9', '#49b6c4', '#225ea8']
            },
            field: 'sales'
        };
        const xAxisVar = {
            platformConfig: {
                title: {
                    text: 'Employee',
                    attr: {
                        'font-size': '14px'
                    }
                }
            },
            axis: {
                orient: 'bottom'
            },
            scale: {
                type: 'band'
            },
            field: 'employee'
        };
        const yAxisVar = {
            platformConfig: {
                title: {
                    text: 'Day',
                    attr: {
                        'font-size': '14px'
                    }
                }
            },
            axis: {
                orient: 'left'
            },
            scale: {
                type: 'band'
            },
            field: 'day'
        };
        const tiles = {
            attr: {
                'stroke': '#081d58',
                'stroke-width': 2
            }
        };
        this.heatmapCmp.setTiles(tiles);
        this.heatmapCmp.setColorAxis(color);
        this.heatmapCmp.setConfig(platformConfigVar);
        this.heatmapCmp.setXAxis(xAxisVar);
        this.heatmapCmp.setYAxis(yAxisVar);
        this.heatmapCmp.setStore(this.store);
    }

    onRefreshDataButtonReady = (event) => {
        this.refreshDataCmp = event.detail.cmp;
        this.refreshDataCmp.setHandler(this.refreshData.bind(this));
    }

    onRefreshSizeButtonReady = (event) => {
        this.refreshSizeCmp = event.detail.cmp;
        this.refreshSizeCmp.setHandler(this.refreshSize.bind(this));
    }

    refreshData = () => {
        this.store.loadData(refreshData());
    }

    refreshSize = () => {
        this.store.loadData(refreshSize());
    }
}
