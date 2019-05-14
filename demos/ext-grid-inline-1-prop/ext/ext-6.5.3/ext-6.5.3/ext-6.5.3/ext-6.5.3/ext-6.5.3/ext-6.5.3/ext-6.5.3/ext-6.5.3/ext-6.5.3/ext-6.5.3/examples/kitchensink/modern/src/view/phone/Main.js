Ext.define('KitchenSink.view.phone.Main', {
    extend: 'Ext.dataview.NestedList',

    requires: [
        'Ext.TitleBar',
        'Ext.ActionSheet'
    ],

    id: 'cardPanel',

    title: 'Kitchen Sink',
    scrollable: true,
    classCls: 'main-nav',
    layout: {
        type: 'card',
        animation: {
            duration: 250,
            easing: 'ease-in-out'
        }
    },

    store: 'Navigation',
    toolbar: {
        id: 'mainNavigationBar',
        xtype: 'titlebar',
        docked: 'top',
        title: 'Kitchen Sink',

        items: [{
            align: 'right',
            menu: {
                itemId: 'materialThemeMenu',
                xtype: 'actionsheet',
                hideOnMaskTap: true
            },
            iconCls: 'palette',
            hidden: !(Ext.theme.is.Material && window.Fashion && Fashion.css && Fashion.css.setVariables),
            arrow: false
        }, {
            xtype: 'button',
            align: 'right',
            action: 'burger',
            menu: Ext.theme.is.Material ?
                {
                    itemId: 'burgerButtonMenu'
                } :
                {
                    xtype: 'actionsheet',
                    side: 'right',
                    itemId: 'burgerButtonMenu',
                    width: 200,
                    viewportMenuConfigs: {
                        right: {
                            reveal: false
                        }
                    }
                },
            iconCls: 'menu',
            arrow: false
        }]
    }
});
