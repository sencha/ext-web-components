import './PurchasesByDayComponent.html';
import storeData from './storeData';

export default class PurchasesByDayComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: [
                {name: 'date', type: 'date', dateFormat: 'Y-m-d'},
                'bucket',
                'count'
            ],
            data: storeData
        });
        this.platformConfigVar = {
            legend: {
                docked: 'bottom',
                padding: 60,
                items: {
                    count: 7,
                    slice: [1],
                    reverse: true,
                    size: {
                        x: 60,
                        y: 30
                    }
                }
            }
        };
    }

    onHeatMapReady = (event) => {
        this.heatmapCmp = event.detail.cmp;
        const tooltip = {
            'renderer': this.onTooltip.bind(this)
        };
        const color = {
            'scale': {
                'type': 'linear',
                'range': ['white', 'green']
            },
            'field': 'count',
            'minimum': 0
        };
        const xAxisVar = {
            platformConfig: {
                desktop: {
                    title: {
                        text: 'Date'
                    }
                }
            },
            axis: {
                ticks: 'd3.timeDay',
                tickFormat: 'd3.timeFormat(\'%b %d\')',
                orient: 'bottom'
            },
            scale: {
                type: 'time'
            },
            field: 'date',
            step: 24 * 60 * 60 * 1000
        };
        const yAxisVar = {
            platformConfig: {
                desktop: {
                    title: {
                        text: 'Total'
                    }
                }
            },
            axis: {
                orient: 'left',
                tickFormat: 'd3.format(\'$d\')'
            },
            scale: {
                type: 'linear'
            },
            field: 'bucket',
            step: 100
        };
        const tiles = {
            'attr': {
                'stroke': 'green',
                'stroke-width': 1
            }
        };
        this.heatmapCmp.setTiles(tiles);
        this.heatmapCmp.setColorAxis(color);
        this.heatmapCmp.setConfig(this.platformConfigVar);
        this.heatmapCmp.setXAxis(xAxisVar);
        this.heatmapCmp.setYAxis(yAxisVar);
        this.heatmapCmp.setTooltip(tooltip);
        this.heatmapCmp.setStore(this.store);
    }

    onTooltip = (component, tooltip, datum) => {
        var d = datum.data,
            field = component.getColorAxis().getField(),
            date = Ext.Date.monthNames[d.date.getMonth()] + ' ' + d.date.getDate();

        tooltip.setHtml(d[field] + ' customers purchased a total of $'
      + d.bucket + ' to $' + (d.bucket + 100) + '<br> of goods on ' + date);
    }
}
