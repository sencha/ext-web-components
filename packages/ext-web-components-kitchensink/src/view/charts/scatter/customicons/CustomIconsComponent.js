import '../../charttoolbar/ChartToolbar.js';
import './CustomIconsComponent.html';
import generateData from './CustomIconsComponentData.js';

Ext.require('Ext.chart.interactions.ItemEdit');

export default class CustomIconsComponent {

    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
        });
        this.theme = 'default';
        this.menuCmpArray = [];
        this.zoom = false;
        this.store.loadData(generateData(25));
    }

    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
        const padding = !Ext.os.is.Phone? '15' : '';
        this.containerCmp.setPadding(padding);
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
        this.store.loadData(generateData(25));
        this.cartesianCmp.setStore(this.store);
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
            fields: ['g1', 'g2', 'g3', 'g4'],
            label: {
                rotate: {
                    degrees: -30
                }
            }
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'id'
        }]);
        this.cartesianCmp.setSeries([{
            type: 'scatter',
            xField: 'id',
            yField: 'g1',
            title: 'Group 1',
            highlight: true,
            marker: {
                type: 'path',
                scale: 10,
                lineWidth: 2,
                path: [
                    ['M', 0, 1],
                    ['L', 1, 0],
                    ['L', 0, -1],
                    ['L', -1, 0],
                    ['Z']
                ]
            }
        }, {
            type: 'scatter',
            xField: 'id',
            yField: 'g2',
            title: 'Group 2',
            highlight: true,
            marker: {
                type: 'path',
                scalingX: 0.1,
                scalingY: -0.1,
                path: [
                    ['M', 0, -145],
                    ['L', 48, -50],
                    ['L', 153, -36],
                    ['L', 76, 39],
                    ['L', 93, 143],
                    ['L', 0, 95],
                    ['L', -93, 143],
                    ['L', -76, 39],
                    ['L', -153, -36],
                    ['L', -48, -50],
                    ['Z']
                ]
            }
        }]);
    }
}
