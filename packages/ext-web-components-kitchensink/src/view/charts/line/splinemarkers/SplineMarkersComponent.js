import './SplineMarkersComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import { storeData } from './storeData';

export default class SplineMarkersComponent {
    constructor() {
        this.menuCmpArray = [];
    }

    cartesianReady = (event) => {
        this.cartesianCmp = event.detail.cmp;
        const store = Ext.create('Ext.data.Store', {
            fields: ['theta', 'sin', 'cos', 'tan'],
            data: storeData
        });
        this.cartesianCmp.setStore(store);
        this.cartesianCmp.setAxes(
            [{
                type: 'numeric',
                fields: ['sin', 'cos', 'tan'],
                position: 'left',
                grid: true,
                renderer: (axis, label) => Ext.util.Format.number(label, '0.0')
            }, {
                type: 'category',
                title: 'Theta',
                fields: 'theta',
                position: 'bottom',
                style: {
                    textPadding: 0 // remove extra padding between labels to make sure no labels are skipped
                },
                grid: true,
                label: {
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
                style: {
                    lineWidth: 2
                },
                marker: {
                    radius: 4
                },
                highlight: {
                    fillStyle: '#000',
                    radius: 5,
                    lineWidth: 2,
                    strokeStyle: '#fff'
                }
            }, {
                type: 'line',
                xField: 'theta',
                yField: 'cos',
                smooth: true,
                style: {
                    lineWidth: 2
                },
                marker: {
                    radius: 4
                },
                highlight: {
                    fillStyle: '#000',
                    radius: 5,
                    lineWidth: 2,
                    strokeStyle: '#fff'
                }
            }, {
                type: 'line',
                xField: 'theta',
                yField: 'tan',
                smooth: true,
                style: {
                    lineWidth: 2
                },
                marker: {
                    radius: 4
                },
                highlight: {
                    fillStyle: '#000',
                    radius: 5,
                    lineWidth: 2,
                    strokeStyle: '#fff'
                }
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
