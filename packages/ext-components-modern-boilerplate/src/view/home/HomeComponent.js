import data from './data.js';

export default class HomeComponent {
  readyGrid(event) {
    this.gridCmp = event.detail.cmp;
    const store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data,
    });

    const columns = [
        {
            text: 'Name',
            flex: '2',
            dataIndex: 'name',
        },
        {
            text: 'Email',
            flex: '3',
            dataIndex: 'email',
            responsiveConfig: {
                'width <= 576': { hidden: true },
                'width > 768': { hidden: false },
            },
        },
        {
            text: 'Phone',
            flex: '2',
            dataIndex: 'phone',
        },
    ];

    this.gridCmp.setColumns(columns);
    this.gridCmp.setStore(store);
  }

  onSearch(instanceInfo) {
    this.gridCmp.getStore().clearFilter();
    const newValue = instanceInfo.detail.newValue;

    if (newValue.length) {
        const newValueStr = newValue.toLowerCase();

        this.gridCmp.getStore().filterBy((record) => {
            const { name, email, phone } = record.data;
            return name.toLowerCase().indexOf(newValueStr) > -1
            || email.toLowerCase().indexOf(newValueStr) > -1
            || phone.toLowerCase().indexOf(newValueStr) > -1;
        });
    }
  }
}
