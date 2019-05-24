import './DisclosureListComponent.html';

export default class DisclosureListComponent {
    constructor() {}

    onListReady = (event) => {
        this.listCmp = event.detail.cmp;
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/people.json'
            },
            sorters: ['last_name', 'first_name']
        });

        this.listCmp.setStore(this.store);
    }

    msgAlert = ({ detail: { record }}) => {
        Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('first_name'), Ext.emptyFn);
    };
}
