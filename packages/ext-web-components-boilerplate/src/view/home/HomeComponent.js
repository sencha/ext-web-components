import data from './data.js';
import './HomeComponent.html';

export default class HomeComponent {

    extnameToProperty = (cmpObj, me, suffix) => {
        if (suffix == undefined) {
            suffix = 'Cmp';
        }
        for (var prop in cmpObj) {
            me[prop+suffix] = cmpObj[prop];
        }
    }

    readyGrid = (event) => {
        //console.log('home.readyGrid');
        //console.log(event);
        this.extnameToProperty(event.detail.cmpObj, this, '');
        const store = Ext.create('Ext.data.Store', {
            fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
            data,
        });
        this.mainGrid.setStore(store);
    }

    onSearch = (event) => {
        this.mainGrid.getStore().clearFilter();
        const newValue = event.detail.newValue;

        if (newValue.length) {
            const newValueStr = newValue.toLowerCase();

            this.mainGrid.getStore().filterBy((record) => {
                const { name, email, phone } = record.data;
                return name.toLowerCase().indexOf(newValueStr) > -1
            || email.toLowerCase().indexOf(newValueStr) > -1
            || phone.toLowerCase().indexOf(newValueStr) > -1;
            });
        }
    }
}