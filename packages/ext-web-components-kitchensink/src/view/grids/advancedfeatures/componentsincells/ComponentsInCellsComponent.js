import './ComponentsInCellsComponent.html';
import './ComponentsInCellsComponent.scss';
import model from '../../data/CompanyModel';

export default class ComponentsInCellsComponent {
    onGridReady = (event) => {
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

    onLastGrid = (event) => {
        this.lastGridColumnCmp = event.detail.cmp;
        this.lastGridColumnCmp.setCell({
            xtype: 'widgetcell',
            forceWidth: 'true',
            widget: {
                xtype: 'segmentedbutton',
                maxWidth: '300',
                allowDepress: 'true',
                items: [
                    {
                        text: 'Buy',
                        handler: this.buttonClick.bind(this),
                    },
                    {
                        text: 'Sell',
                        handler: this.buttonClick.bind(this),
                    },
                    {
                        text: 'Watch',
                        handler: this.buttonClick.bind(this),
                    }
                ]
            }
        });
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

    buttonClick = (button) => {
        const gridrow = button.up('gridrow'),
            record = gridrow.getRecord();
        Ext.toast(`${button._text} ${record.get('name')}`);
    }
}
