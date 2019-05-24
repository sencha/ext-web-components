import './SummaryRowComponent.html';
import './SummaryRowComponent.scss';
import model from '../../data/CompanyModel';

Ext.require([
    'Ext.grid.plugin.SummaryRow',
    'Ext.data.summary.Average',
    'Ext.data.summary.Max',
]);

export default class SummaryRowComponent {
    gridReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: 'resources/data/CompanyData.json',
            }
        });

        this.gridCmp = event.detail.cmp;
        this.gridCmp.setStore(store);
    }

    companyColumnReady = (event) => {
        this.companyColumnCmp = event.detail.cmp;
        this.companyColumnCmp.setSummaryRenderer(this.summarizeCompanies.bind(this));
    }

    summarizeCompanies = (grid, context) => {
        return context.records.length + ' Companies';
    }

    changeColumnReady = (event) => {
        this.changeColumnCmp = event.detail.cmp;
        this.changeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00'));
        this.changeColumnCmp.setSummaryRenderer(this.renderPercentChangeSummary.bind(this, '0.00'));

    }
    percentChangeColumnReady = (event) => {
        this.pctChangeColumnCmp = event.detail.cmp;
        this.pctChangeColumnCmp.setRenderer(this.renderSign.bind(this, '0.00%'));
        this.pctChangeColumnCmp.setSummaryRenderer(this.renderPercentChangeSummary.bind(this, '0.00%'));
    }

    renderPercentChangeSummary = (format, value, context) => {
        if(value>0) {
            context.cell.setCls('greenClass');
        }
        else if(value<0){
            context.cell.setCls('redClass');
        }

        return Ext.util.Format.number(value, format);
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
