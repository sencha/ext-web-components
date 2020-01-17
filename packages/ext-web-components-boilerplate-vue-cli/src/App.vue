<template>
  <ext-container
    viewport="true"
    layout="fit"
    v-on:ready="readyContainer($event)"
  >
    <ext-titlebar height="52px" docked="top" weight="10">
      <ext-button
        extname="navButton"
        iconCls="x-fa fa-bars"
      >
      </ext-button>
      <span
        href="#"
        class="app-title"
      >
        Sencha ExtWebComponentsModern Vue 7.1.1 Boilerplate
      </span>
    </ext-titlebar>
    <ext-treelist
      docked="left"
      width="200px"
      shadow="true"
      extname="treelist"
      ui="nav"
      expanderFirst="false"
      expanderOnly="false"
      v-on:itemclick="navTreelistSelectionChange($event)"
    >
    </ext-treelist>
    <ext-panel padding="10">
      <div style="height: 80vw;">
        <router-view></router-view>
      </div>
    </ext-panel>
  </ext-container>
</template>

<script>
  import getMenu from './menu.js';
  const menu = getMenu();

  export default {
    name: 'app',
    data() {
      return {
        navItems: {
          type: 'tree',
          root: {
            text: 'All',
            hash: 'all',
            iconCls: 'x-fa fa-home',
            expanded: true,
            children: menu
          }
        }
      }
    },
    methods: {
      readyContainer: function(event) {
        var cmpObj = event.detail.cmpObj;
        this.treelist = cmpObj['treelist']
        this.navButton = cmpObj['navButton']
        this.treelist.setStore(this.navItems);
        const node = this.treelist.getStore().findNode('hash', 'home');
        this.treelist.setSelection(node);
        //const record = node.data.text.toLowerCase();
        //this.navigate(record);
      },
      navTreelistSelectionChange: function(event) {
        const record = event.detail.info.node.data.text.toLowerCase();
        this.navigate(record);
      },
      navigate: function(record) {
        if (record == null) {
          console.log('it was null');
          return;
        }
        this.$router.push( `/${record}`);
      }
    }
  }
</script>
