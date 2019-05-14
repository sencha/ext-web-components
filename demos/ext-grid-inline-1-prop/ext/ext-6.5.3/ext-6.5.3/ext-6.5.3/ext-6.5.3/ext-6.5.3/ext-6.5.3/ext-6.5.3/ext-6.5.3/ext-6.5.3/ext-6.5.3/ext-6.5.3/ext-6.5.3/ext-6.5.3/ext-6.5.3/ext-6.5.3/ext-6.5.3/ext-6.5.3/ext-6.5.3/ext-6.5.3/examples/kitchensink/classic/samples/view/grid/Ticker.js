/*
 * This example shows how reapidly updating data can be displayed in a grid without overloading the DOM or
 * the processor.
 *
 * Updates are buffered for a configurable time, defaulting to 200 milliseconds.
 *
 * This example also ilustrates the use of calculated, dependent fields as only the *price* field is actually
 * changed, and all the other changes are applied automatically by the Company model class using the
 * calculate method of the fields.
 */
Ext.define('KitchenSink.view.grid.Ticker', {
    extend: 'Ext.grid.Panel',
    xtype: 'ticker-grid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'KitchenSink.view.grid.TickerController',
        'KitchenSink.store.Companies'
    ],
    controller: 'tickergrid',

    title: 'Ticker Grid',

    store: 'Companies',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/grid/TickerController.js'
    }, {
        type: 'Store',
        path: 'app/store/Companies.js'
    }, {
        type: 'Model',
        path: 'app/model/Company.js'
    }, {
        type: 'Data',
        path: 'app/data/Company.js'
    }],
    //</example>

    viewModel: {
        data: {
            tickDelay: Ext.view.AbstractView.updateDelay,
            flashBackground: false
        }
    },

    // Rapid updates are coalesced and flushed on a timer.
    viewConfig: {
        throttledUpdate: true
    },

    plugins: {
        cellediting: true
    },

    width: 600,
    height: 500,
    columns: [{
        text: 'Company',
        flex: 1,
        sortable: true,
        dataIndex: 'name',
        editor: {
            xtype: 'textfield'
        }
    }, {
        text: 'Price',
        width: 95,
        formatter: 'usMoney',
        dataIndex: 'price',
        align: 'right',
        producesHTML: false,
        sortable: false
    }, {
        text: 'Trend',
        width: 100,
        dataIndex: 'trend',
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sparklineline',
            tipTpl: 'Price: {y:number("0.00")}'
        },
        sortable: false
    }, {
        text: 'Change',
        width: 90,
        producesHTML: true,
        renderer: 'renderChange',
        updater: 'updateChange',
        dataIndex: 'priceChange',
        align: 'right',
        sortable: false
    }, {
        text: '% Change',
        width: 100,
        renderer: 'renderChangePercent',
        updater: 'updateChangePercent',
        dataIndex: 'priceChangePct',
        align: 'right',
        sortable: false
    }, {
        text: 'Last Updated',
        hidden: true,
        width: 115,
        sortable: true,
        formatter: 'date("m/d/Y H:i:s")',
        dataIndex: 'priceLastChange',
        producesHTML: false,
        sortable: false
    }],
    bbar: {
        docked: 'bottom',
        xtype: 'toolbar',
        defaults: {
            margin: '0 10 0 0'
        },
        items: [{
            fieldLabel: 'Update\u00a0delay',
            xtype: 'sliderfield',
            minValue: 200,
            maxValue: 2000,
            increment: 10,
            bind: '{tickDelay}',
            liveUpdate: true,
            listeners: {
                change: 'onTickDelayChange'
            },
            flex: 1
        }, {
            xtype: 'textfield',
            editable: false,
            bind: '{tickDelay}',
            width: 80,
            clearable: false,
            readOnly: true
        }, {
            xtype: 'checkboxfield',
            bind: '{flashBackground}',
            listeners: {
                render: function(c) {
                    c.inputEl.dom.setAttribute('data-qtip', 'Flash background color on change');
                },
                single: true
            }
        }]
    }
});
