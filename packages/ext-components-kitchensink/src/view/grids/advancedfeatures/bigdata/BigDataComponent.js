import './BigDataComponent.scss';
import './BigDataComponent.html';
import model from './GridModel';
import './BigDataService.js';

Ext.require([
  'Ext.grid.plugin.*',
  'Ext.tip.ToolTip',
  'Ext.data.summary.Sum',
  'Ext.exporter.*'
]);

export default class BigDataComponent {
  constructor() {
    this.showExportSheet = false;
  }

  readyGrid(event) {
    this.gridCmp = event.detail.cmp;
    this.store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      pageSize: 0,
      groupField: 'department',
      proxy: {
        type: 'ajax',
        url: '/KitchenSink/BigData'
      }
    });

    this.setItemConfig();

    this.gridCmp.setStore(this.store);
    this.exportMenu = Ext.getCmp("exportMenuOfBigData");
    this.exportMenu.getMenu().on('click', this.exportOptionChanged.bind(this));
    this.ratingAvgColumn = Ext.getCmp("ratingAverageColumn");
    this.ratingAvgColumn.setRenderer(this.renderRating.bind(this));
    this.ratingAvgColumn.setSummaryRenderer(this.renderSummaryRating.bind(this));
  }

  exportOptionChanged(sender, item) {
    const value = item._text;
    if (value==='Excel xlsx') {
      this.exportToXlsx();
    } else if (value==='Excel xml') {
      this.exportToXml();
    } else if (value==='Excel CSV') {
      this.exportToCSV();
    } else if (value==='Excel TSV') {
      this.exportToTSV();
    } else if (value==='Excel HTML') {
      this.exportToHtml();
    }
  }

  setItemConfig() {
    const rowBodyTpl = `
      <div>
        <img src={avatar} height="100px" style="float:left;margin:0px 10px 5px 0px;"/>
        <br><b>{fullName}</b>
        <br>{dob:date}
      </div>
    `;

    this.gridCmp.setItemConfig({ viewModel: {}, body: { tpl: rowBodyTpl }});
  }

  exportToXlsx() {
    this.doExport({
      type: 'excel07',
      title: 'Grid Export Demo',
      fileName: 'GridExport.xlsx',
      includeGroups: true,
      includeSummary: true
    });
  }

  exportToXml() {
    this.doExport({
      type: 'excel03',
      title: 'Grid Export Demo',
      fileName: 'GridExport.xml',
      includeGroups: true,
      includeSummary: true
    });
  }

  exportToCSV() {
    this.doExport({
      type: 'csv',
      title: 'Grid Export Demo',
      fileName: 'GridExport.csv'
    });
  }

  exportToTSV() {
    this.doExport({
      type: 'tsv',
      title: 'Grid Export Demo',
      fileName: 'GridExport.tsv'
    });
  }

  exportToHtml() {
    this.doExport({
      type: 'html',
      title: 'Grid Export Demo',
      fileName: 'GridExport.html'
    });
  }

  doExport(config) {
    this.showExportSheet = false;
    this.gridCmp.saveDocumentAs(config);
  }

  onCancelExport() {
    this.showExportSheet = false;
  }

  onExportClick() {
    this.showExportSheet = true;
  }

  nameColumnReady(event) {
    this.nameColumn = event.detail.cmp;
    this.nameColumn.setSorter({
      sorterFn: this.nameSorter.bind(this)
    });
  }

  nameSorter(rec1, rec2) {
    let rec1Name = rec1.get('surname') + rec1.get('forename'),
        rec2Name = rec2.get('surname') + rec2.get('forename');

    if (rec1Name > rec2Name) {
        return 1;
    }

    if (rec1Name < rec2Name) {
        return -1;
    }

    return 0;
  }

  onBeforeDocumentSave(view) {
    view.mask({
      xtype: 'loadmask',
      message: 'Document is prepared for export. Please wait ...'
    })
  }

  onDocumentSave(view) {
    view.unmask();
  }

  renderRating(value, record, column, cell) {
    const age = record.get('averageRating');
    let group = "over6";
    if (age < 4) {
        group = "under4";
    } else if (age < 5) {
        group = "under5";
    } else if (age < 6) {
        group = "under6";
    }

    cell.setCls(`${group} big-data-ratings-cell`);
    return value;
  }

  renderSummaryRating(value, record, column, cell) {
    const age = value;
    let group = "over6";
    if (age < 4) {
        group = "under4";
    } else if (age < 5) {
        group = "under5";
    } else if (age < 6) {
        group = "under6";
    }

    record.cell.setCls(`${group} big-data-ratings-cell`);
    return age;
  }

  emptyColumnReady(event) {
    const emptyColumn = event.detail.cmp;
    emptyColumn.setCell({
      xtype: 'widgetcell',
      widget: {
        xtype: 'button',
        bind: {
          tooltip: 'Verify {record.fullName}'
        },
        ui: 'action',
        text: 'VERIFY',
        handler: this.onVerify.bind(this)
      }
    });

    emptyColumn.setSummaryCell({
        xtype: 'widgetcell',
        widget: {
          xtype: 'button',
          ui: 'action',
          text: 'All',
          handler: this.onVerifyAll.bind(this)
        }
    });
  }

  onVerify(button) {
    let cell = button.up('widgetcell'),
        record = cell.getRecord();
    record.set('verified', !record.get('verified'));
  }

  onVerifyAll(cell) {
    let row = cell.up('gridrow'),
        group = row.getGroup(),
        grid = cell.up('grid'),
        store = this.store,
        count;

    if (group) {
      count = group.length;
    } else {
      count = store.getCount();
    }

    Ext.Msg.confirm('Verify All',
      'Are you sure you want to verify all ' + count + ' items?',
      answer => {
        if (answer === 'yes') {
            // Don't want to grid to update on each change:
            this.store.suspendEvent('update');
            (group || store).each(function (rec) {
              rec.set('verified', true);
            });
            this.store.resumeEvent('update');
            // Now update all the things
            grid.refresh();
        }
      }
    );
  }
}
