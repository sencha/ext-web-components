import './DisclosureListComponent.html';

export default class DisclosureListComponent {
    constructor() {}

    listReady = (event) => {
        this.listCmp = event.detail.cmp;
        const tpl = '<div>{first_name} {last_name}</div>';
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/people.json'
            },
            sorters: ['last_name', 'first_name']
        });

        this.listCmp.setItemTpl(tpl);
        this.listCmp.setStore(this.store);
        // this.theListview.setItemConfig({
        //     onItemDisclosure: (record) => {
        //         Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('first_name'), Ext.emptyFn);
        //     }
        // });

        // this.theListview.setOnItemDisclosure(true)

        // this.theListview.setConfig({
        //     onItemDisclosure: (record) => {
        //         Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('first_name'), Ext.emptyFn);
        //     }
        // });
    }

    msgAlert = (param) => {
        Ext.Msg.alert('Tap', 'Disclose more info for ' + param.get('first_name'), Ext.emptyFn);
    };
}
