import './PivotHeatmapComponent.html';
import refreshRandomData from './createData';

export default class PivotHeatmapComponent {
    constructor() {
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
                header: !Ext.platformTags.phone? 'Employee' : '',
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
        this.paddingMobilePotrait = '20 20 60 60';
        this.legendVarMobilePotrait = {
            docked: 'bottom',
            padding: 30,
            items: {
                count: 6,
                slice: [1],
                reverse: true,
                size: {
                    x: 30,
                    y: 20
                }
            }
        };
        this.paddingMobileLandscape = '20 20 50 80';
        this.legendVarMobileLandscape = {
            docked: 'right',
            padding: 20,
            items: {
                count: 5,
                slice: [1],
                reverse: true,
                size: {
                    x: 25,
                    y: 15
                }
            }
        };

        this.padding = '20 30 70 120';
        this.legendVarAll = {
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
       };
  }

  onToolBarReady= (event) => {
    this.toolbar = event.detail.cmp;
  }

  onPivotReady = (event) => {
      this.pivotCmp = event.detail.cmp;
      const orientation = Ext.Viewport.getOrientation();
      const tooltip = {
          renderer: this.onTooltip.bind(this)
      };

      const legend = this.pivotCmp.getLegend(false);
      legend.setComponent(null);

      if (this.isPhone && orientation === 'portrait') {
        this.pivotCmp.setLegend(this.legendVarMobilePotrait);
        this.pivotCmp.setPadding(this.paddingMobilePotrait);
      } else if (this.isPhone && orientation === 'landscape') {
        this.pivotCmp.setLegend(this.legendVarMobileLandscape);
        this.pivotCmp.setPadding(this.paddingMobileLandscape);
        this.toolbar.setHeight(30);
        this.toolbar.bodyElement.dom.style.minHeight = '0px';
      } else {
        this.pivotCmp.setLegend(this.legendVarAll);
        this.pivotCmp.setPadding(this.padding);
      }

      this.pivotCmp.setMatrix(this.matrixVar);
      this.pivotCmp.setTooltip(tooltip);
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

  onRefreshClick = () => {
      this.store.loadData(refreshRandomData());
  }
}
