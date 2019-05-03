import './PivotHeatmapComponent.html';
import refreshRandomData from './createData';

export default class PivotHeatmapComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      fields: [
          {name: 'employee', type: 'string'},
          {name: 'dayNumber', type: 'int'},
          {name: 'day', type: 'string'},
          {name: 'sales', type: 'number'}
      ]
    });
    this.store.loadData(refreshRandomData());
    this.matrixVar = {
      store: this.store,
      leftAxis: {
          dataIndex: 'employee',
          header: !Ext.platformTags.phone?  'Employee' : '',
          sortable: false
      },
      topAxis: {
          dataIndex: 'day',
          sortIndex: 'dayNumber',
          header: 'Day'
      },
      aggregate: {
          dataIndex: 'sales',
          aggregator: 'sum'
      }
    };

    this.isPhone = Ext.platformTags.phone;

    if(!this.isPhone){
      this.legendVar = {
        docked: 'right',
        padding: 50,
        items: {
            count: 10,
            slice: [1],
            reverse: true,
            size: {
                x: 60,
                y: 30
            }
        }
      }
    }
  }

  onPivotReady = (event) => {
    this.pivot = event.detail.cmp;
    const tooltip = {
      renderer: this.onTooltip.bind(this)
    }
    this.pivot.setMatrix(this.matrixVar);
    this.pivot.setTooltip(tooltip);
  }

  onTooltip = (component, tooltip, datum) => {
    const d = datum.data,
      x = component.getXAxis().getField(),
      y = component.getYAxis().getField(),
      z = component.getColorAxis().getField();

    tooltip.setHtml(
      '<div>X: ' + d[x] + '</div>' +
      '<div>Y: ' + d[y] + '</div>' +
      '<div>Z: ' + d[z] + '</div>' +
      '<div>Records: ' + d.records + '</div>'
    );
  }

  onRefreshButtonReady = (event) => {
    this.refreshButtonCmp = event.detail.cmp;
    this.refreshButtonCmp.on('tap', this.onRefreshClick.bind(this));
  }

  onRefreshClick = (event) => {
    this.store.loadData(refreshRandomData());
  }
}
