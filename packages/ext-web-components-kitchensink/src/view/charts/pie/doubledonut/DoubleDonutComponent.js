import './DoubleDonutComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import {innerData, outerData} from './createData';

export default class DoubleDonutComponent {
    constructor() {
        this.innerStore = Ext.create('Ext.data.Store', {
            data: innerData
        });
        this.outerStore = Ext.create('Ext.data.Store', {
            data: outerData
        });
        this.polarSeries = [{
            type: 'pie',
            angleField: 'usage',
            label: {
                field: 'type',
                display: 'inside'
            },
            store: this.innerStore,
            radiusFactor: 70,
            donut: 20,
            tooltip: {
                trackMouse: true,
                renderer: (tooltip, record) => {
                    tooltip.setHtml(Ext.String.capitalize(record.get('type')) + ' sector: ' + record.get('usage'));
                }
            }
        }, {
            type: 'pie',
            angleField: 'usage',
            donut: 80,
            highlight: true,
            label: {field: 'provider'},
            tooltip: {
                trackMouse: true,
                renderer: (tooltip, record) => {
                    tooltip.setHtml(record.get('provider') + ': ' + record.get('usage'));
                }
            }
        }];
        this.theme = 'default';
        this.menuCmpArray = [];
    }

    onPolarReady = (event) => {
        this.polarCmp = event.detail.cmp;
        this.polarCmp.setStore(this.outerStore);
        this.polarCmp.setSeries(this.polarSeries);
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
        this.polarCmp.setTheme(event.config.text.toLowerCase());
    }
}
