Ext.define('KitchenSink.view.desktop.Main', {
    extend: 'Ext.Container',

    requires: [
        'KitchenSink.view.ContentPanel',
        'KitchenSink.view.BreadcrumbBar',
        'KitchenSink.view.desktop.NavigationBar'
    ],

    id: 'mainPanel',

    layout: {
        type: 'hbox'
    },

    items: [{
        id: 'mainNavigationBar',
        xtype: 'desktopnavigationbar',
        title: 'Ext JS Kitchen Sink',
        docked: 'top',
        items: [{
            xtype: 'component',
            cls: ['ext', 'ext-sencha'],
            style: 'padding-right: 10px'
        }, {
            align: 'right',
            menu: {
                itemId: 'materialThemeMenu'
            },
            iconCls: 'palette',
            hidden: !(Ext.theme.is.Material && window.Fashion && Fashion.css && Fashion.css.setVariables),
            arrow: false
        }, {
            align: 'right',
            menu: {
                itemId: 'burgerButtonMenu'
            },
            iconCls: 'menu',
            arrow: false
        }]
    }, {
        id: 'cardPanel',
        flex: 3,
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'breadcrumb',
            docked: 'top'
        }, {
            xtype: 'contentPanel',
            id: 'contentPanel1',
            layout: 'center'
        }, {
            xtype: 'contentPanel',
            id: 'contentPanel2',
            layout: 'center'
        }]
    }, {
        xtype: 'sourceoverlay',
        flex: 1
    }]
});
