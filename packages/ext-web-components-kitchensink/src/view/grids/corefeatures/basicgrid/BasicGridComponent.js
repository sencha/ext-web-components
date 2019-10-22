import { getCmp } from '../../../../util.js';
import './BasicGridComponent.scss';
import './BasicGridComponent.html';
import model from '../../data/CompanyModel';
import '../../data/Companies.js';

Ext.require([
    'Ext.grid.plugin.HeaderReorder'
]);

export default class BasicGridComponent {
    constructor() {
        this.store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/Companies'
            }
        });
    }

    onPageReady(event) {
      this.gridCmp = event.detail.cmp
      this.gridCmp.setStore(this.store);
    }

    changeColumnReady = (event) => {
        this.changeColumnCmp = event.detail.cmp;
        this.changeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00'));
    }
    percentChangeColumnReady = (event) => {
        this.pctChangeColumnCmp = event.detail.cmp;
        this.pctChangeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00%'));
    }

    renderSign = (format, value, record, dataIndex, cell) => {
        if(value>0) {
            cell.setCls('greenClass');
        }
        else if(value<0){
            cell.setCls('redClass');
        }

        return Ext.util.Format.number(value, format);
    }
}
