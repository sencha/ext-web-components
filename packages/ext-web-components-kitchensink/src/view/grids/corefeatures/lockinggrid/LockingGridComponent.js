import './LockingGridComponent.html';
import model from '../../data/CompanyModel';
Ext.require([
    'Ext.data.summary.Average',
    'Ext.data.summary.Max',
]);

export default class LockingGridComponent {
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
        const columns = [
            {
                'text': 'Company',
                'width': '200',
                'dataIndex': 'name',
                'minWidth': '100',
                'locked': true
            },
            {
                'text': 'Price',
                'width': '75',
                'dataIndex': 'price',
                'formatter': 'usMoney',
                'locked': true
            },
            {
                'text': 'Action',
                'locked': 'left',
                'width': '130',
                'cell': {
                    'tools': {
                        'approve': {
                            'iconCls': 'x-fa fa-check green',
                            'handler': this.onApprove.bind(this)
                        },
                        'decline': {
                            'iconCls': 'x-fa fa-ban red',
                            'handler':  this.onDecline.bind(this),
                            'weight': '1'
                        }
                    }
                }
            },
            {
                'locked': 'right',
                'text': 'Change',
                'width': '130',
                'align': 'right',
                'dataIndex': 'change',
                'renderer': this.renderSign.bind(this, '0.00'),
                'cell': {
                    'encodeHtml': 'false'
                },
                'xtype': 'numbercolumn',
                'format': '0.00'
            },
            {
                'text': '% Change',
                'width': '130',
                'align': 'right',
                'dataIndex': 'pctChange',
                'renderer': this.renderSign.bind(this, '0.00%'),
                'cell': {
                    'encodeHtml': 'false'
                },
                'xtype': 'numbercolumn',
                'format': '0.00%'
            },
            {
                'text': 'Last Updated',
                'width': '150',
                'dataIndex': 'lastChange',
                'formatter': 'date("m/d/Y")'
            },
            {
                'text': 'Industry',
                'width': '150',
                'dataIndex': 'industry'
            }
        ];

        const lockedGridCmp = event.detail.cmp;
        lockedGridCmp.setStore(store);
        lockedGridCmp.setColumns(columns);
    }
    onApprove = (grid, info) => {
        Ext.Msg.alert('Approve', info.record.get('name'));
    }
    onDecline = (grid, info) => {
        Ext.Msg.alert('Decline', info.record.get('name'));
    }
    renderSign = (format, value) => (
        Ext.util.Format.number(value, format)
    )
}
