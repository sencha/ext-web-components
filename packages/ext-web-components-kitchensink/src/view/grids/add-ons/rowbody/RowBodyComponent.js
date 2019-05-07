import './RowBodyComponent.scss';
import './RowBodyComponent.html';
import model from '../../data/CompanyModel';

export default class RowBodyComponent {
    gridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/CompanyData.json',
            }
        });

        this.grid = event.detail.cmp;
        const tpl = `<div>
        <div>Industry: {industry}</div>
        <div>Last Updated: {[Ext.util.Format.date(values.lastChange, "Y-m-d g:ia")]}</div>
        <div style="margin-top:1em">{desc}</div>
      </div>`;

        this.grid.setItemConfig({ body: { tpl }});
        this.grid.setStore(store);
    }

    changeColumnReady = (event) => {
        this.changeColumn = event.detail.cmp;
        this.changeColumn.setRenderer(this.renderSign.bind(this, '0.00'));
    }
    percentChangeColumnReady = (event) => {
        this.pctChangeColumn = event.detail.cmp;
        this.pctChangeColumn.setRenderer(this.renderSign.bind(this, '0.00%'));
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
