import './ViewOptionsComponent.scss';
import './ViewOptionsComponent.html';
import model from '../../data/CompanyModel';

Ext.require(['Ext.grid.plugin.ViewOptions']);

export default class ViewOptionsComponent {
    gridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/CompanyData.json',
            }
        });

        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(store);
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
