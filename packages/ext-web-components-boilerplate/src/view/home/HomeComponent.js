import data from './data.js';
import './HomeComponent.html';

export default class HomeComponent {

    getCmp(event, value) {
        var array = event.detail.allCmp;
        for (var i = 0; i < array.length; i++) {
            if (array[i]['extname'] === value) {
                return array[i].ext;
            }
        }
        return null;
    }

    readyGrid = (event) => {
        console.log('home.readyGrid');
        console.log(event);
        this.gridCmp = this.getCmp(event, 'mainGrid');
        //this.gridCmp = event.detail.cmp;
        const store = Ext.create('Ext.data.Store', {
            fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
            data,
        });

        console.log(this.gridCmp);
        this.gridCmp.setStore(store);
    }

    onSearch = (event) => {
        this.gridCmp.getStore().clearFilter();
        const newValue = event.detail.newValue;

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
