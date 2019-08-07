import './CompactLayoutComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class CompactLayoutComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model: saleModel,
            data: generateData()
        });
        this.monthLabelRenderer = function(value) {return Ext.Date.monthNames[value];};

        this.pivotgridMatrix = {
            type: 'local',
            textRowLabels: 'Custom header',
            compactViewColumnWidth: 210,
            viewLayoutType: 'compact',
            store: this.store,
            aggregate: [{
                dataIndex: 'value',
                header: 'Total',
                aggregator: 'sum',
                width: 120
            }],
            leftAxis: [{
                dataIndex: 'person',
                header: 'Person'
            }, {
                dataIndex: 'company',
                header: 'Company',
                sortable: false
            }, {
                dataIndex: 'country',
                header: 'Country'
            }],
            topAxis: [{
                dataIndex: 'year',
                header: 'Year'
            }, {
                dataIndex: 'month',
                header: 'Month',
                labelRenderer: this.monthLabelRenderer
            }]
        };
    }

    onPivotGridReady = (event) => {
        this.pivotgridCmp = event.detail.cmp;
        this.pivotgridCmp.setMatrix(this.pivotgridMatrix);
    }

    onReadyButton1 = (event) => {
        this.Button1Cmp = event.detail.cmp;
        this.Button1Cmp.setHandler(this.expandAll.bind(this));
    }

    onReadyButton2 = (event) => {
        this.Button2Cmp = event.detail.cmp;
        this.Button2Cmp.setHandler(this.collapseAll.bind(this));
    }

    expandAll = () => {this.pivotgridCmp.expandAll();}
    collapseAll = () => {this.pivotgridCmp.collapseAll();}
}
