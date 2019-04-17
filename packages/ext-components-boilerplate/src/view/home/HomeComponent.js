import data from './data.js';
import './HomeComponent.html';
import { xsmall, small } from '../../helper/responsiveFormulas';

export default class HomeComponent {
  readyGrid(event) {
    this.gridCmp = event.detail.cmp;
    const store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data,
    });

    this.gridCmp.setStore(store);
  }

  onSearch(event) {
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
