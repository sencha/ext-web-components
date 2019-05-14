Ext.define('KitchenSink.view.grid.ExpanderLockable', {
    extend: 'Ext.grid.Panel',
    xtype: 'expander-lockable',

    //<example>
    otherContent: [{
        type: 'Store',
        path: 'app/store/Companies.js'
    }, {
        type: 'Model',
        path: 'app/model/Company.js'
    }],
    profiles: {
        classic: {
            width: 700
        },
        neptune: {
            width: 750
        }
    },
    //</example>

    title: 'Expander Rows in a Collapsible Grid with lockable columns',
    width: '${width}',
    height: 300,
    
    collapsible: true,
    animCollapse: false,
    columnLines: true,
    enableLocking: true,
    store: 'Companies',

    columns: [{
        text: "Company",
        flex: 1,
        dataIndex: 'name'
    }, {
        text: "Price",
        formatter: 'usMoney',
        dataIndex: 'price'
    }, {
        text: "Change",
        dataIndex: 'priceChange'
    }, {
        text: "% Change",
        dataIndex: 'priceChangePct'
    }, {
        text: "Last Updated",
        width: 120,
        formatter: 'date("m/d/Y")',
        dataIndex: 'priceLastChange'
    }],

    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>Company:</b> {name}</p>',
                '<p><b>Change:</b> {change:this.formatChange}</p><br>',
                '<p><b>Summary:</b> {desc}</p>',
                {
                    formatChange: function (v) {
                        var color = v >= 0 ? 'green' : 'red';

                        return '<span style="color: ' + color + ';">' +
                            Ext.util.Format.usMoney(v) + '</span>';
                    }
                })
        }
    }
});
