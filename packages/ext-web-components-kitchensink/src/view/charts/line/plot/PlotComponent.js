import './PlotComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import createData from './createData';

export default class PlotComponent {

    constructor() {
        this.menuCmpArray = [];
        this.store = Ext.create('Ext.data.Store', {
            fields: ['x', 'y']
        });
        this.onRefreshClick();
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setStore(this.store);
        this.cartesianCmp.setAxes(
            [{
                type: 'numeric',
                position: 'left',
                fields: 'y',
                grid: true,
                minimum: -4,
                maximum: 4,
                title: {
                    text: 'f(x)',
                    fontSize: 16,
                    fillStyle: 'rgb(255, 0, 136)'
                },
                floating: {
                    value: 0,
                    alongAxis: 1
                }
            }, {
                type: 'numeric',
                position: 'bottom',
                fields: 'x',
                grid: true,
                title: {
                    text: 'x',
                    fontSize: 16,
                    fillStyle: 'rgb(255, 0, 136)'
                },
                floating: {
                    value: 0,
                    alongAxis: 0
                }
            }]
        );
        this.cartesianCmp.setSeries(
            [{
                type: 'line',
                xField: 'x',
                yField: 'y',
                style: {
                    lineWidth: 2,
                    strokeStyle: 'rgb(0, 119, 204)'
                }
            }]
        );
    }

    onZoomButtonReady = (event) => {
        this.zoomButtonCmp = event.detail.cmp;
        this.zoomButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, true));
    }

    onPanButtonReady = (event) => {
        this.panButtonCmp = event.detail.cmp;
        this.panButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, false));
    }

    toggleZoomOnPan(zoomOnPan) {
        this.cartesianCmp.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }

    onRefreshButtonReady = (event) => {
        this.refreshButtonCmp = event.detail.cmp;
        this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
    }

    onRefreshClick = () => {
        this.store.loadData(createData());
    }

    onZoomButtonReady = (event) => {
        this.zoomButtonCmp = event.detail.cmp;
        this.zoomButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, true));
    }

    onPanButtonReady = (event) => {
        this.panButtonCmp = event.detail.cmp;
        this.panButtonCmp.on('tap', this.toggleZoomOnPan.bind(this, false));
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
}
