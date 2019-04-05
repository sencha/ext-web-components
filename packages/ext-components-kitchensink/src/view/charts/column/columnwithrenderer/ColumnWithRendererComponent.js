import './ColumnWithRendererComponent.html';
import { createData } from './ColumnWithRendererComponentData.js';
import { seriesG1Renderer, seriesG2Renderer } from './ColumnWithRendererComponentRenderer.js';

export default class ColumnWithRendererComponent {

  constructor () {
    console.log('in ColumnWithRendererComponent constructor');
    this.store = Ext.create('Ext.data.Store', {
      fields: ['id', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'name']
    });
    this.numRecords = 10; 
    this.store.loadData(createData(this.numRecords));
  }

  onRefreshButtonReady(event) {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick(event) {
    this.store.loadData(createData(this.numRecords));
    this.cartesianCmp.setStore(this.store);

  }

  cartesianready(event) {
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setAxes([{
      type: 'numeric',
      position: 'left',
      fields: ['g1', 'g2'],
      minimum: 0
    }, {
      type: 'category',
      position: 'bottom',
      fields: 'name'
    }]);
    this.cartesianCmp.setSeries([{
      type: 'bar',
      xField: 'name',
      yField: 'g1',
      renderer: seriesG1Renderer.bind(this),
      style: {
        lineWidth: 2,
        maxBarWidth: 30,
        stroke: 'dodgerblue',
        fill: 'palegreen',
        opacity: 0.6
      }
    }, {
      type: 'bar',
      xField: 'name',
      yField: ['g2'],
      renderer: seriesG2Renderer.bind(this),
      style: {
        lineWidth: 2,
        maxBarWidth: 12,
        stroke: 'tomato',
        fill: 'lightyellow',
        radius: 20
      }
    }]);
  }
}
