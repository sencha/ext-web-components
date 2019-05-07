import './SplineComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import { storeData } from './storeData';

export default class SplineComponent {

    constructor() {
        this.menuCmpArray = [];
    }

    onReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        const store = Ext.create('Ext.data.Store', {
            fields: ['theta', 'sin', 'cos', 'tan'],
            data: storeData
        });
        this.cartesianCmp.setStore(store);
        this.cartesianCmp.setAxes(
            [{
                type: 'numeric',
                position: 'left',
                title: 'Sin (Theta)',
                grid: true,
                fields: 'sin',
                label: {
                    renderer: (axis, label) => Ext.util.Format.number(label, '0.00')
                }
            }, {
                type: 'numeric',
                position: 'bottom',
                title: 'Theta',
                grid: true,
                fields: 'theta',
                label: {
                    textPadding: 0,
                    rotate: {
                        degrees: -45
                    }
                }
            }]
        );
        this.cartesianCmp.setSeries(
            [{
                type: 'line',
                xField: 'theta',
                yField: 'sin',
                smooth: true,
                highlight: true,
                showMarkers: false
            }]
        );
    }

    onMenuItemReady = (event) => {
        this.menuCmpArray.push(event.detail.cmp);
        event.detail.cmp.on('click', this.onThemeChange.bind(this));
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
