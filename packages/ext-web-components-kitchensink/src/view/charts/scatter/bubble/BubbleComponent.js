import '../../charttoolbar/ChartToolbar.js';
import './BubbleComponent.html';
import generateData from './BubbleComponentData.js';

export default class BubbleComponent {

  constructor () {
    console.log('in BubbleComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5']
    });
    this.theme = "default";
    this.menuCmpArray = [];
    this.zoom = false;
    this.store.loadData(generateData(25));

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
    this.store.loadData(generateData(25));
    this.cartesianCmp.setStore(this.store);
  }

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

  interpolate(lambda, minSrc, maxSrc, minDst, maxDst) {
    return minDst + (maxDst - minDst) * Math.max(0, Math.min(1, (lambda - minSrc) / (maxSrc - minSrc)))
  };

  interpolateColor(lambda, minSrc, maxSrc) {
    let fromHSL = Ext.util.Color.fly('blue').getHSL(),
      toHSL = Ext.util.Color.fly('red').getHSL();

    fromHSL[2] = 0.5;

    return Ext.util.Color.fly(0, 0, 0, 0).setHSL(
      this.interpolate(lambda, minSrc, maxSrc, fromHSL[0], toHSL[0]),
      this.interpolate(lambda, minSrc, maxSrc, fromHSL[1], toHSL[1]),
      this.interpolate(lambda, minSrc, maxSrc, fromHSL[2], toHSL[2])
    ).toString();
  };

  styleRenderer(sprite, config, rendererData, index) {
    const store = rendererData.store,
      storeItem = store.getData().items[index];

    config.radius = this.interpolate(storeItem.data.g3, 0, 1000, 5, 30);
    config.fillOpacity = this.interpolate(storeItem.data.g3, 0, 1000, 1, 0.7);
    config.fill = this.interpolateColor(storeItem.data.g3, 0, 1000);
    config.stroke = Ext.util.Color.fromString(config.fill).createDarker(0.15).toString();
  };

  cartesianready(event) {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setTheme(this.theme);
    this.cartesianCmp.setAxes([{
      type: 'numeric',
      position: 'left',
      minimum: 0,
      style: {
        estStepSize: 20
      },
      label: {
        rotate: {
          degrees: -30
        }
      }
    }, {
      type: 'numeric',
      position: 'bottom'
    }]);
    this.cartesianCmp.setSeries([{
      type: 'scatter',
      xField: 'id',
      yField: 'g2',
      highlight: {
        scale: 1.5,
        lineWidth: 4,
        fill: 'gold',
        fillOpacity: 1
      },
      marker: {
        type: 'circle',
        radius: 5,
        stroke: 'gray',
        lineWidth: 2,
        fx: {
          duration: 200
        }
      },
      style: {
        renderer: this.styleRenderer.bind(this)
      }
    }]);
  }

}
