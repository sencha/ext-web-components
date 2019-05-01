declare var Ext: any;
import { Component } from '@angular/core';
import { SampleData } from './SampleData';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
  <ext-container padding="10" layout="fit" [fitToParent]="true">
    <ext-grid [title]="this.gridTitle" shadow="true" (ready)="this.readyGrid($event)">
      <ext-toolbar docked="top">
        <ext-searchfield ui="faded" placeholder="Search..." (change)="this.onSearch($event)" [responsiveConfig]="searchresponsiveConfig"></ext-searchfield>
      </ext-toolbar>
      <ext-column text="ID" dataIndex="id" width="50px" resizable="true"></ext-column>
      <ext-column text="Name" dataIndex="name" flex="2" resizable="true"></ext-column>
      <ext-column text="Email" dataIndex="email" flex="3" resizable="true" [responsiveConfig]="emailresponsiveConfig"></ext-column>
      <ext-column text="Phone" dataIndex="phone" flex="2" resizable="true"></ext-column>
    </ext-grid>
  </ext-container>
  `
})
export class AppComponent {

  isPhone = Ext.platformTags.phone;

  store = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
    data: new SampleData(50).data
  });

  emailresponsiveConfig = {
    small: {
      hidden: true
    },
    medium: {
      hidden: false
    }
  };

  searchresponsiveConfig = {
    small: {
      flex: 1
    },
    medium: {
      flex: undefined
    }
  };

  gridCmp: any;
  gridTitle: string = 'Sencha ExtWebComponents 7.0 in Angular';

  readyGrid(event) {
    this.gridCmp = event.detail.cmp
    //console.log('readyGrid')
    //console.log(event)
    this.gridCmp.setStore(this.store)
  }

  onSearch = (event) => {
    //console.dir(event)
    const query = event.detail.newValue.toLowerCase();
    this.store.clearFilter();
    if (query.length) this.store.filterBy(record => {
      const { name, email, phone } = record.data;
      return name.toLowerCase().indexOf(query) !== -1 ||
        email.toLowerCase().indexOf(query) !== -1 ||
        phone.toLowerCase().indexOf(query) !== -1;
    });
  }

}
