import model from '../../data/CompanyModel';
import './EditableGridComponent.html';

Ext.require([
    'Ext.grid.plugin.Editable',
    'Ext.grid.plugin.CellEditing',
    'Ext.data.validator.Presence',
    'Ext.data.validator.Number',
    'Ext.data.validator.Date'
]);

export default class EditableGridComponent {
    onReady = (event) => {
        const store = Ext.create('Ext.data.Store', {
            model,
            autoLoad: true,
            pageSize: 0,
            proxy: {
                type: 'ajax',
                url: 'resources/data/CompanyData.json',
            }
        });

        const editableGrid = event.detail.cmp;
        editableGrid.setStore(store);
    }

    columnready1 = (event) => {
        this.columnCmp1 = event.detail.cmp;
        this.columnCmp1.setRenderer(this.renderSign.bind(this, '0.00'));
    }

    columnready2 = (event) => {
        this.columnCmp2 = event.detail.cmp;
        this.columnCmp2.setRenderer(this.renderSign.bind(this, '0.00'));
    }

    renderSign = (format, value) => {
        return `<span style={{ color: ${value} > 0 ? 'green' : ${value} < 0 ? 'red' : '' }}>
            ${Ext.util.Format.number(value, format)}
        </span>` ;
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
