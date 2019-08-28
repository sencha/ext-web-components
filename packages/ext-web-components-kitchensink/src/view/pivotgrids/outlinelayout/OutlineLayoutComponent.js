import './OutlineLayoutComponent.html';
import { generateData } from '../generateSaleData';
import saleModel from '../saleModel';

export default class OutlineLayoutComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model: saleModel,
            data: generateData()
        });
        this.pivotgridMatrix = {
            type: 'local',
            store: this.store,
            viewLayoutType: 'outline',
            aggregate: [{
                dataIndex: 'value',
                header: 'Total',
                aggregator: 'sum',
                width: 110
            }],
            leftAxis: [{
                dataIndex: 'person',
                header: 'Person',
                width: 150
            }, {
                dataIndex: 'company',
                header: 'Company',
                sortable: false,
                width: 150
            }, {
                dataIndex: 'country',
                header: 'Country',
                width: 150
            }],
            topAxis: [{
                dataIndex: 'year',
                header: 'Year'
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

    expandAll = () => {this.pivotgridCmp.expandAll();}
    collapseAll = () => {this.pivotgridCmp.collapseAll();}
}
