import './StackedComponent.html';
import createData from './StackedComponentData.js';

export default class StackedComponent {

  constructor () {
    console.log('in StackedComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g0', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
    });
    this.theme = "default";
    this.menuCmpArray = [];
    this.stacked = 0;
    this.zoom = false;
    this.numRecords = 7;
    this.store.loadData(createData(this.numRecords));

  }


  onMenuItemReady(event) {
    this.menuCmpArray.push(event.detail.cmp);
    event.detail.cmp.on('click', this.onThemeChange.bind(this));
  }

  onRefreshButtonReady(event) {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick(event) {
    this.store.loadData(createData());
    this.cartesianCmp.setStore(this.store);

  }

  toggleZoomOnPan(zoomOnPan) {
    //Added cmp to access component attributes in ext-react16 [revisit]
    this.chart.getInteraction('panzoom').setZoomOnPan(zoomOnPan);
    this.zoom = zoomOnPan;
  };

  onStackedToggle(event) {
    if (event.value == 0) {
      this.stacked = 1;
    } else {
      this.stacked = 0;
    }

    this.chart.getSeries()[0].setStacked(this.stacked);
    this.chart.redraw();
  };

  onThemeChange(event) {
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

  containerready(event) {
    this.cmp = event.detail.cmp;
  }

  cartesianready(event) {
    this.chart = event.ext;
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setTheme(this.theme);
    this.cartesianCmp.setAxes([{
      type: 'numeric',
      position: 'left',
      fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6']
    }, {
      type: 'category',
      position: 'bottom',
      fields: 'name'
    }]);
    this.cartesianCmp.setSeries([{
      type: 'bar',
      xField: 'name',
      yField: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
      title: ['Apples', 'Oranges', 'Bananas', 'Plums', 'Mangos', 'Pears'],
      stacked: true,
      style: {
        minGapWidth: 15
      }
    }]);
    this.cartesianCmp.setInteractions([{
      type: 'panzoom',
      axes: {
        left: {
          allowPan: false,
          allowZoom: false
        },
        bottom: {
          allowPan: true,
          allowZoom: true
        }
      }
    }]);
  }


}
