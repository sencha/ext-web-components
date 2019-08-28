declare var Ext: any;
import { Component } from '@angular/core';
import { SampleData } from './SampleData';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
  <ext-panel title="Sencha ExtWebComponents 7.0 in Angular" layout="vbox" fitToParent="true" padding="10">
    <div style="text-align:center;margin-top:20px;margin-bottom:25px;font-size:24px;">
      <img width="250" alt="Angular" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
      <div>Angular</div>
    </div>
    <ext-grid flex="1" fitToParent="true" title="Employees" shadow="true" (ready)="this.readyGrid($event)">
      <ext-toolbar docked="top">
        <ext-searchfield ui="faded" placeholder="Search..." (change)="this.onSearch($event)"></ext-searchfield>
      </ext-toolbar>
      <ext-column text="ID"    dataIndex="id"    width="50"></ext-column>
      <ext-column text="Name"  dataIndex="name"  flex="2">  </ext-column>
      <ext-column text="Email" dataIndex="email" flex="3">  </ext-column>
      <ext-column text="Phone" dataIndex="phone" flex="2">  </ext-column>
    </ext-grid>
  </ext-panel>
  `
})
export class AppComponent {

  store:any = Ext.create('Ext.data.Store', {
    fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
    data: new SampleData(50).data
  });

  gridCmp: any;

  readyGrid = (event) => {
    this.gridCmp = event.detail.cmp
    this.gridCmp.setStore(this.store)
  }

  onSearch = (event) => {
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
