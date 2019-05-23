import './PullRefreshListComponent.html';

Ext.require([
    'Ext.plugin.PullRefresh'
]);

export default class PullRefreshListComponent {
    constructor() {}

    listReady = (event) => {
        this.listCmp = event.detail.cmp;
        this.listCmp.setItemTpl('<div>{name}</div>');

        this.store = Ext.create('Ext.data.Store', {
            fields: ['name'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/Companies',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    implicitIncludes: false
                },
                extraParams: {
                    shuffle: true
                }
            }
        });

        this.listCmp.setStore(this.store);
    }

    rewriteStore = () => {
        this.store = Ext.create('Ext.data.Store', {
            fields: ['name'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/KitchenSink/Companies',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    implicitIncludes: false
                },
                extraParams: {
                    shuffle: true
                }
            }
        });
        this.listCmp.setStore(this.store);
    }
}
