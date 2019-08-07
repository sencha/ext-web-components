import './DataChangesComponent.html';
import { generateData, randomItem } from '../generateSaleData';
import saleModel from '../saleModel';

export default class DataChangesComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            autoDestroy: true,
            model: saleModel,
            proxy: { type: 'memory' }
        });
        this.pivotMatrix = {
            type: 'local',
            store: this.store,
            aggregate: [
                {
                    dataIndex: 'value',
                    header: 'Total',
                    aggregator: 'sum'
                },
                {
                    dataIndex: 'value',
                    header: 'Count',
                    aggregator: 'count'
                }
            ],
            leftAxis: [
                {
                    dataIndex: 'year',
                    header: 'Year'
                },
                {
                    dataIndex: 'person',
                    header: 'Person'
                }
            ],
            topAxis: [
                {
                    dataIndex: 'country',
                    header: 'Country'
                }
            ]
        };
    }

    onPivotGridReady = (event) => {
        this.pivotgridCmp = event.detail.cmp;
        this.pivotgridCmp.setMatrix(this.pivotMatrix);
    }

    onButtonReady1 = (event) => {
        this.button1Cmp = event.detail.cmp;
        this.button1Cmp.setHandler(this.addData.bind(this));
    }

    onButtonReady2 = (event) => {
        this.button2Cmp = event.detail.cmp;
        this.button2Cmp.setHandler(this.updateData.bind(this));
    }

    onButtonReady3 = (event) => {
        this.button3Cmp = event.detail.cmp;
        this.button3Cmp.setHandler(this.removeData.bind(this));
    }

     onButtonReady4 = (event) => {
         this.button4Cmp = event.detail.cmp;
         this.button4Cmp.setHandler(this.clearData.bind(this));
     }

    addData = () => {
        this.store.add(generateData(1));
    }

    updateData = () => {
        const data = generateData(1)[0],
            record = randomItem(this.store.data.items);
        if(record) {
            record.set(data);
        }
    }

    removeData = () => {
        const record = randomItem(this.store.data.items);
        if(record) {
            this.store.remove(record);
        }
    }

    clearData = () => {
        this.store.removeAll();
    }
}
