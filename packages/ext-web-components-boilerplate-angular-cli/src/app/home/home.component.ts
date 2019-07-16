declare var Ext: any;
import { Component } from '@angular/core';
import data from './data';

@Component({
    selector: 'home-app',
    styles: [``],
    templateUrl: 'home.component.html'
  })
  export default class HomeComponent {
    gridCmp:any;
    store:any;

    readyGrid = (event) => {
      this.gridCmp = event.detail.cmp;
      this.store = Ext.create('Ext.data.Store', {
          fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
          data,
      });

      this.gridCmp.setStore(this.store);
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