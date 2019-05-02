<template>
    <ext-container flex="1" :padding="'10'" :layout="'fit'" :fitToParent="true">
      <ext-grid :title="msg" shadow="true" v-on:ready="readyGrid($event)">
        <ext-toolbar docked="top">
          <ext-searchfield ui="faded" placeholder="Search..." v-on:change="onSearch($event)"></ext-searchfield>
        </ext-toolbar>
        <ext-column text="ID"    dataIndex="id"    width="50"></ext-column>
        <ext-column text="Name"  dataIndex="name"  flex="2">  </ext-column>
        <ext-column text="Email" dataIndex="email" flex="3">  </ext-column>
        <ext-column text="Phone" dataIndex="phone" flex="2">  </ext-column>
      </ext-grid>
    </ext-container>
</template>

<script>
import { SampleData } from './SampleData';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      gridCmp: {},
      store: null
    }
  },
  methods: {
    readyGrid: function (event) {
      this.gridCmp = event.detail.cmp
      this.store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data: new SampleData(50).data
      });
      this.gridCmp.setStore(this.store)
    },
    onSearch: function(event) {
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
}
</script>
