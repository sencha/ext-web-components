import './BasicMarkersComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import generateData from './generateData';

export default class BasicMarkersComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
        });
        this.store.loadData(generateData(this.numRecords));
        this.numRecords = 10;
        this.menuCmpArray = [];
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
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

    onRefreshButtonReady = (event) => {
        this.refreshButtonCmp = event.detail.cmp;
        this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
    }

    onRefreshClick = () => {
        this.store.loadData(generateData(this.numRecords));
        this.cartesianCmp.setStore(this.store);
    }
}
