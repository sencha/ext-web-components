import './RangeEditorPluginComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class RangeEditorPluginComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model: saleModel,
            data: generateData()
        });
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
                header: 'Company',
                width: 120
            }, {
                dataIndex: 'country',
                header: 'Country',
                direction: 'DESC',
                width: 150
            }],
            topAxis: [{
                dataIndex: 'year',
                header: 'Year'
            }, {
                dataIndex: 'month',
                header: 'Month',
                labelRenderer: value => Ext.Date.monthNames[value]
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
