import './CollapsibleComponent.html';
import { generateData, randomDate } from '../generateSaleData';
import saleModel from '../saleModel';

export default class CollapsibleComponent {

  constructor () {
    this.store = Ext.create('Ext.data.Store', {
      model: saleModel
    });
    this.monthLabelRenderer = function(value) {return Ext.Date.monthNames[value]} ;
    this.pivotgridMatrix = {
      "type": "local",
      "collapsibleRows": this.collapsibleRows,
      "rowSubTotalsPosition": "none",
      "collapsibleColumns" : this.collapsibleColumns,
      "colSubTotalsPosition": "none",
      "viewLayoutType": "tabular",
      "store": this.store,
      "aggregate": [{
        "dataIndex": "value",
        "header": "Total",
        "aggregator": "sum",
        "width": 90
      }],
      "leftAxis": [
        {
          "dataIndex": "person",
          "header": "Person"
        }, 
        {
          "dataIndex": "company",
          "header": "Company"
        }, 
        {
          "dataIndex": "year",
          "header": "Year"
        }
      ],
      "topAxis": [
        {
          "dataIndex": "country",
          "header": "Country"
        }, 
        {
          "dataIndex": "month",
          "labelRenderer": this.monthLabelRenderer,
          "header": "Month"
        }
      ]
    };
    this.loadData();
    this.collapsibleRows = false;
    this.collapsibleColumns = false;
    this.menuItems = [];
  }

  loadData() {
    const data = generateData(20);
    for(let i=0; i<data.length; i++) {
      data[i].company = 'Dell';
      data[i].date = randomDate(new Date(2016, 0, 1), new Date(2016, 0, 31));
    }
    this.store.loadData(data);
  }

  onReady(event) {
    this.pivotgrid = event.detail.cmp;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
  }

  onReadyMenu(event) {
    this.menu = event.detail.cmp;
    this.menu.on('click',this.onCollapsibleChange.bind(this));
  }

  onReadyMenuItem(event) {
    this.menuItem = event.detail.cmp;
    this.menuItems.push(this.menuItem);
  }

  onCollapsibleChange(sender, item) {
    const text = item._text;
    this.menuItems.forEach(function(menuItem) {
      const menuItemText = menuItem._text;
      
      if (menuItemText === text) {
        menuItem.setIconCls('x-font-icon md-icon-check');
      } else {
        menuItem.setIconCls(null);
      }
    });

    var collapsibleColumns = false
    var collapsibleRows = false
    switch(item._text) {
      case 'None':
        collapsibleColumns = false
        collapsibleRows = false
        break;
      case 'Rows Only':
        collapsibleColumns = false
        collapsibleRows = true
        break;
      case 'Columns Only':
        collapsibleColumns = true
        collapsibleRows = false
        break;
      case 'Rows & Columns':
        collapsibleColumns = true
        collapsibleRows = true
        break;
      default:
        collapsibleColumns = false
        collapsibleRows = false
    }
    this.collapsibleColumns = collapsibleColumns;
    this.collapsibleRows = collapsibleRows;
    this.pivotgridMatrix.collapsibleColumns = this.collapsibleColumns ;
    this.pivotgridMatrix.collapsibleRows = this.collapsibleRows ;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
  }
}
