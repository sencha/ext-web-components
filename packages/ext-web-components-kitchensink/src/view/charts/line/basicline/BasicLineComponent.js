import './BasicLineComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import { data } from './data';

Ext.require([
    'Ext.chart.series.Line',
    'Ext.chart.axis.Numeric',
    'Ext.chart.axis.Time'
]);

export default class BasicLineComponent {

    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            data
        });
        this.theme = 'default';
        this.menuCmpArray = [];
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        this.cartesianCmp.setStore(this.store);
        this.cartesianCmp.setTheme(this.theme);
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

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
    }
}
