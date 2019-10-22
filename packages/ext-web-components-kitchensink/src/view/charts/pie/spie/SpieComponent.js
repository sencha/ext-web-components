import './SpieComponent.html';

export default class SpieComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['os', 'data1', 'data2'],
            data: [
                {os: 'Android', data1: 68.3, data2: 150},
                {os: 'iOS', data1: 17.9, data2: 200},
                {os: 'Windows Phone', data1: 10.2, data2: 250},
                {os: 'BlackBerry', data1: 1.7, data2: 90},
                {os: 'Others', data1: 1.9, data2: 190}
            ]
        });
        this.polarSeries = [{
            type: 'pie',
            animation: {
                easing: 'easeOut',
                duration: 500
            },
            angleField: 'data1', // bind pie slice angular span to market share
            radiusField: 'data2', // bind pie slice radius to growth rate
            clockwise: false,
            highlight: {
                margin: 20
            },
            label: {
                field: 'os', // bind label text to name
                display: 'outside',
                fontSize: 14
            },
            style: {
                strokeStyle: 'white',
                lineWidth: 1
            },
            tooltip: {
                trackMouse: true,
                renderer: (tooltip, record) => {
                    tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
                }
            }
        }];
        this.theme = 'default';
        this.menuCmpArray = [];
    }

    onPolarReady = (event) => {
        this.polarCmp = event.detail.cmp;
        this.polarCmp.setStore(this.store);
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
