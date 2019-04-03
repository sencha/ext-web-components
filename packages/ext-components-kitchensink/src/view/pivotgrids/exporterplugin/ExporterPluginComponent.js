import './ExporterPluginComponent.html';
import { generateData } from '../generateSaleData';
import SaleModel from '../SaleModel';

Ext.require([
  'Ext.pivot.plugin.Exporter',
  'Ext.pivot.plugin.Configurator'
]);

export default class ExporterPluginComponent {
  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      model: SaleModel,
      data: generateData()
    });
    this.monthRenderer = function(value) {return Ext.Date.monthNames[value]};
    this.pivotgridPlugins = [{
      type: 'pivotexporter'
    }, {
      type: 'pivotconfigurator',
      fields: [{
        dataIndex: 'quantity',
        header: 'Qty',
        aggregator: 'min',
        formatter: 'number("0")',
        settings: {
          allowed: ['aggregate'],
          style: {
            fontWeight: 'bold'
          },
          formatters: {
            '0': 'number("0")',
            '0%': 'number("0%")'
          }
        }
      }, {
          dataIndex: 'value',
          header: 'Value',
          settings: {
              allowed: 'aggregate',
              aggregators: ['sum', 'avg', 'count'],
              style: {
                fontWeight: 'bold'
              },
              renderers: {
                'Colored 0,000.00': this.coloredRenderer
              },
              formatters: {
                '0': 'number("0")',
                '0.00': 'number("0.00")',
                '0,000.00': 'number("0,000.00")',
                '0%': 'number("0%")',
                '0.00%': 'number("0.00%")'
              }
          }
      }, {
          dataIndex: 'continent',
          header: 'Continent',
          settings: {
            aggregators: ['count']
          }
      }, {
          dataIndex: 'company',
          header: 'Company',
          settings: {
            aggregators: ['count']
          }
      }, {
          dataIndex: 'country',
          header: 'Country',
          settings: {
            aggregators: ['count']
          }
      }, {
          dataIndex: 'person',
          header: 'Person',
          settings: {
            aggregators: 'count'
          }
      }, {
          dataIndex: 'year',
          header: 'Year',
          settings: {
            aggregators: ['count'],
            allowed: ['leftAxis', 'topAxis']
          }
      }, {
          dataIndex: 'month',
          header: 'Month',
          labelRenderer: this.monthRenderer,
          settings: {
            aggregators: ['count'],
            allowed: ['leftAxis', 'topAxis']
          }
      }]
    }];
  
    this.pivotGridMatrix = {
      type: 'local',
      calculateAsExcel: true,
      store: this.store,
      aggregate: [{
          dataIndex: 'value',
          header: 'Total',
          aggregator: 'sum',
          width: 120,
          exportStyle: [{
            format: 'Currency',
            alignment: {
                horizontal: 'Right'
            }
          }, {
              type: 'html',
              format: 'Currency',
              alignment: {
                  horizontal: 'Right'
              },
              font: {
                  italic: true,
                  bold: true
              }
          }]
      }],
      leftAxis: [{
          dataIndex: 'person',
          header: 'Person',
          width: 120
      }, {
          dataIndex: 'company',
          header: 'Company',
          sortable: false
      }],
      topAxis: [{
          dataIndex: 'year',
          header: 'Year'
      }, {
          dataIndex: 'country',
          header: 'Country'
      }]
    };
    this.configurationArray=[
      {"type": "pivotxlsx", text:"Excel xlsx (pivot table definition)", "matrix": true,"fileName": "ExportPivot.xlsx"},
      {"type": "excel07", text:"Excel xlsx (all items)", "fileName": "ExportAll.xlsx"},
      {"type": "excel07", text:"Excel xlsx (visible items)", "fileName": "ExportVisible.xlsx","onlyExpandedNodes": true},
      {"type": "excel03", text:"Excel xml (all items)", "fileName": "ExportAll.xml"},
      {"type": "excel03", text: "Excel xml (visible items)", "fileName": "ExportVisible.xml","onlyExpandedNodes": true},
      {"type": "csv", text: "CSV (all items)", "fileName": "ExportAll.csv"},
      {"type": "csv", text: "CSV (visible items)", "fileName": "ExportVisible.csv","onlyExpandedNodes": true},
      {"type": "tsv", text: "TSV (all items)", "fileName": "ExportAll.csv"},
      {"type": "tsv", text: "TSV (visible items)", "fileName": "ExportVisible.csv","onlyExpandedNodes": true},
      {"type": "html", text: "HTML (all items)", "fileName": "ExportAll.html"},
      {"type": "html", text: "HTML (visible items)", "fileName": "ExportVisible.html","onlyExpandedNodes": true}
    ];
  }

  onPivotGridReady(event) {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setPlugins(this.pivotgridPlugins);
    this.pivotgrid.setMatrix(this.pivotGridMatrix);
  }
  onButtonReady(event){
    this.button = event.detail.cmp;
    this.button.setHandler(this.showConfigurator.bind(this));
  }

  onMenuReady(event) {
    this.menu = event.detail.cmp;
    this.menu.on('click', this.exportDocument.bind(this));
  }

  showConfigurator() { this.pivotgrid.showConfigurator(); }

  onBeforeDocumentSave(view) {
    return view.mask({
        xtype: 'loadmask',
        message: 'Document is prepared for export. Please wait ...'
    });
  }

  onDocumentSave(view) { 
    return view.unmask(); 
  }

  exportDocument(menu, menuItem) {
    const text = menuItem._text;
    const cfg = this.configurationArray.filter(function(item){return item.text === text})[0];
    if(cfg.matrix && cfg.matrix === true) {
      cfg.matrix = this.pivotgrid.getMatrix();
    }
    if(!cfg.title) {
      cfg.title = 'Pivot grid export demo';
    }
    this.pivotgrid.saveDocumentAs(cfg).then(null, this.onError);
  }

  onError(error) { return Ext.Msg.alert('Error', typeof error === 'string' ? error : 'Unknown error'); }

  coloredRenderer(v, record, dataIndex, cell, column) {
    cell.setStyle( Ext.String.format('color: {0};', v > 500 ? 'green' : 'red') );
    return Ext.util.Format.number(v, '0,000.00');
  }
}
