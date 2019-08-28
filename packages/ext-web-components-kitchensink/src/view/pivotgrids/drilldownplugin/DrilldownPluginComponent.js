import './DrilldownPluginComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

Ext.require([
    'Ext.pivot.plugin.DrillDown',
    'Ext.pivot.Grid'
]);

export default class DrilldownPluginComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model: saleModel,
            data: generateData()
        });
        this.monthRenderer = function(value) {return Ext.Date.monthNames[value];} ;
        this.pivotgridMatrix = {
            type: 'local',
            store: this.store,
            aggregate: [{
                dataIndex: 'value',
                header: 'Total',
                aggregator: 'sum',
                width: 120
            }],
            leftAxis: [{
                dataIndex: 'company',
                header: 'Company'
            }, {
                dataIndex: 'country',
                header: 'Country',
                direction: 'DESC'
            }],
            topAxis: [{
                dataIndex: 'year',
                header: 'Year'
            }, {
                dataIndex: 'month',
                header: 'Month',
                labelRenderer: this.monthRenderer
            }]
        };
    }

    onPivotGridReady = (event) => {
        this.pivotgridCmp = event.detail.cmp;
        this.pivotgridCmp.setMatrix(this.pivotgridMatrix);
    }

     onButtonReady1 = (event) => {
         this.button1Cmp = event.detail.cmp;
         this.button1Cmp.setHandler(this.expandAll.bind(this));
     }

     onButtonReady2 = (event) => {
         this.button2Cmp = event.detail.cmp;
         this.button2Cmp.setHandler(this.collapseAll.bind(this));
     }

     collapseAll = () => {this.pivotgridCmp.collapseAll();}
     expandAll = () => {this.pivotgridCmp.expandAll();}
}
