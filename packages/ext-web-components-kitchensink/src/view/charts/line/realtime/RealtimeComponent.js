import './RealtimeComponent.html';
import { addNewData } from './addNewData';
const interval = 1000;

export default class RealtimeComponent {
  constructor () {
    this.timeChartTask;
    this.store = Ext.create('Ext.data.Store', {
      fields: ['yValue', 'metric1', 'metric2']
    });
  }

  chartNavReady = (event) => {
   const cartesianAxes = [{
      type: 'numeric',
      minimum: 0,
      maximum: 20,
      grid: true,
      position: 'left',
      title: 'Number of Hits'
    }, {
      type: 'time',
      dateFormat: 'G:i:s',
      segmenter: {
        type: 'time',
        step: {
          unit: Ext.Date.SECOND,
          step: 1
        }
      },
      label: {
        fontSize: 10
      },
      grid: true,
      position: 'bottom',
      title: 'Seconds',
      fields: ['xValue'],
      majorTickSteps: 10
    }];

   const cartesianSeries = [{
      type: 'line',
      title: 'Metric 1',
      marker: {
        type: 'cross',
        size: 5
      },
      style: {
        miterLimit: 0
      },
      xField: 'xValue',
      yField: 'metric1'
    }, {
      type: 'line',
      title: 'Metric 2',
      marker: {
        type: 'arrow',
        size: 5
      },
      style: {
        miterLimit: 0
      },
      xField: 'xValue',
      yField: 'metric2'
    }];
    this.cartesianCmp = event.detail.cmp;
    this.cartesianCmp.setStore(this.store);
    this.cartesianCmp.setAxes(cartesianAxes);
    this.cartesianCmp.setSeries(cartesianSeries);
    this.startTask();
  }

  startTask = () => {
    let callCount = 1;
    this.timeChartTask = setInterval(() => {
      if (callCount >= 120) {
        clearInterval(this.timeChartTask);
      } else {
        callCount++;
        addNewData(this.cartesianCmp, this.store, interval);
      }
    }, interval);
  };

  stopTask = () => {
    clearInterval(this.timeChartTask);
  };
}
