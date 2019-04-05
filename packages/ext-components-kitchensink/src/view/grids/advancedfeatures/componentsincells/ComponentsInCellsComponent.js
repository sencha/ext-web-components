import './ComponentsInCellsComponent.html';
import model from '../../CompanyModel';

export default class ComponentsInCellsComponent {
  constructor () {}

  onGridReady(event) {
    const store = Ext.create('Ext.data.Store', {
      model,
      autoLoad: true,
      pageSize: 0,
      proxy: {
        type: 'ajax',
        url: 'resources/data/CompanyData.json',
      }
    });

    this.grid = event.detail.cmp;
    this.grid.setStore(store);
  }

  onLastGrid(event) {
    this.lastGridColumn = event.detail.cmp;
    this.lastGridColumn.setCell({
      xtype: "widgetcell",
      forceWidth: "true",
      widget: {
        xtype: "segmentedbutton",
        maxWidth: "300",
        allowDepress: "true",
        items: [{
          text: "Buy",
          handler: this.buttonClick.bind(this),
        }, {
          text: "Sell",
          handler: this.buttonClick.bind(this),
        }, {
          text: "Watch",
          handler: this.buttonClick.bind(this),
        }]
      }
    });
  }

  buttonClick(button) {
    const gridrow = button.up('gridrow'),
        record = gridrow.getRecord();
    Ext.toast(`${button._text} ${record.get('name')}`)
  }
}
