import './ThreeDPieComponent.html';
import '../../charttoolbar/ChartToolbar.js';
import generateData from './generateData';

export default class ThreeDPieComponent {
  constructor () {
    this.menuCmpArray = [];
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
    });
    this.polarSeries = [{
      type: 'pie3d',
      angleField: 'g1',
      donut: 10,
      distortion: 0.6,
      highlight: {
        margin: 40
      },
      thickness: 60,
      platformConfig: {
        phone: {
          thickness: 40
        }
      },
      label: {
        field: 'name',
        calloutColor: 'rgba(0,0,0,0)',
        calloutLine: {
          length: 1
        }
      },
      style: {
        strokeStyle: 'none'
      }
    }];
    this.numRecords = 9;
    this.store.loadData(generateData(this.numRecords));
  }

  onPolarReady = (event) => {
    this.polar = event.detail.cmp;
    this.polar.setStore(this.store);
    this.polar.setSeries(this.polarSeries);
  }

  onMenuItemReady = (event) => {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
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
    this.polar.setTheme(event.config.text.toLowerCase());
  }

  onRefreshButtonReady = (event) => {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick = (event) => {
    this.store.loadData(generateData(this.numRecords));
    this.polar.setStore(this.store);
  }
}
