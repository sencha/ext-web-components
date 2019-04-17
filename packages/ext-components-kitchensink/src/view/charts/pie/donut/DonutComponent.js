import './DonutComponent.html';
import '../../charttoolbar/ChartToolbar.js';

export default class DonutComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: ['os', 'data1'],
      data: [
        {os: 'Android', data1: 68.3},
        {os: 'BlackBerry', data1: 1.7},
        {os: 'iOS', data1: 17.9},
        {os: 'Windows Phone', data1: 10.2},
        {os: 'Others', data1: 1.9}
      ]
    });
    this.polarSeries = [{
      type: 'pie',
      angleField: 'data1',
      donut: 50,
      highlight: true,
      label: {
        field: 'os'
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

  onPolarReady(event) {
    this.polar = event.detail.cmp;
    this.polar.setStore(this.store);
    this.polar.setSeries(this.polarSeries);
  }

  onMenuItemReady(event) {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onThemeChange(event) {
    this.theme = event.config.text.toLowerCase();
    this.menuCmpArray.forEach(function(cmp, index) {
      if (index == parseInt(event.config.itemId)) {
        cmp.setIconCls('x-font-icon md-icon-done');
        return;
      }
      cmp.setIconCls('');
    });
    this.polar.setTheme(event.config.text.toLowerCase());
  }
}
