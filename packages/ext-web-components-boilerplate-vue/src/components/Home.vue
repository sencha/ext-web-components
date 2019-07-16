<template>
  <ext-grid
    v-on:ready="readyGrid($event)"
    height="100%"
  >
    <ext-toolbar docked="top">
      <ext-searchfield
        ui="faded"
        placeholder="Search..."
        v-on:change="onSearch($event)"
        responsiveConfig='{
          "width <= 576": { "flex": "1" },
          "width > 576": { "flex": "undefined" }
        }'
      />
    </ext-toolbar>
    <ext-column
      text="Name"
      flex="2"
      dataIndex="name"
      resizable="true"
    >
    </ext-column>
    <ext-column
      text="Email"
      flex="3"
      dataIndex="email"
      resizable="true"
      responsiveConfig='{
        "width <= 576": { "hidden": true },
        "width > 576": { "hidden": false }
      }'
    >
    </ext-column>
    <ext-column
      text="Phone"
      flex="2"
      dataIndex="phone"
      resizable="true"
    >
    </ext-column>
  </ext-grid>
</template>

<script>
  import HomeData from './HomeData.js';
  export default {
      name: 'Home',
      methods: {
        readyGrid: function(event) {
            this.gridCmp = event.detail.cmp;
            const store = Ext.create('Ext.data.Store', {
              fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
              data: HomeData,
            });

            this.gridCmp.setStore(store);
        },

        onSearch: function(event) {
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
  }
</script>