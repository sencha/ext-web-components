<template>
  <ext-container viewport="true">
    <ext-titlebar height="52px" docked="top" weight="10">
      <ext-button iconCls="x-fa fa-bars" v-on:tap="toggleTree($event)" v-on:ready="readyToggleButton($event)" ></ext-button>
      <span href="#" class="app-title">Sencha ExtWebComponentsModern Vue 7.1 Boilerplate</span>
    </ext-titlebar>
    <div style="width:100vw; height: calc(100vh - 52px); display: flex;">
      <div :style="panelStyle">
        <ext-panel
          docked="left"
          border="true"
          shadow="true"
          scrollable="y"
          resizable='{"edges": "east", "dynamic": "true"}'
          header="false"
          :collapsed="collapsed"
          collapsible='{"direction": "left"}'
          height="100%"
          v-on:ready="readyNavTreePanel($event)"
        >
          <ext-treelist
            ui="nav"
            expanderFirst="false"
            expanderOnly="false"
            v-on:ready="readyNavTreelist($event)"
            v-on:itemclick="navTreelistSelectionChange($event)"
          >
          </ext-treelist>
        </ext-panel>
      </div>
      <div style="width: 100vw;">
        <router-view></router-view>
      </div>
    </div>
  </ext-container>
</template>

<script>
  import getMenu from './menu.js';
  const menu = getMenu();

  export default {
      name: 'app',
      data() {
          return {
              treeStore: Ext.create('Ext.data.TreeStore', {
                  rootVisible: true,
                  root: {
                      hash: 'all',
                      iconCls: 'x-fa fa-home',
                      leaf: false,
                      text: 'All',
                      children: menu
                  }
                }),
              isInitial: true,
              wait: 2,
              collapsed: false,
              panelStyle: "width: 200px;"
          }
      },
      methods: {
          readyNavTreePanel: function(event) {
              this.navTreePanelCmp = event.detail.cmp;
              document.body.style.margin = 0;

              if(Ext.os.is.Phone) {
                  if (this.collapsed) {
                      this.collapsed = false;
                  } else {
                      this.collapsed = true;
                  }
              }
          },
          readyNavTreelist: function(event) {
              this.navTreelistCmp = event.detail.cmp;
              this.navTreelistCmp.setStore(this.treeStore);
              const node = this.treeStore.findNode('hash', 'home');
              this.navTreelistCmp.setSelection(node);
          },
          readyToggleButton: function(event) {
              this.navButton = event.detail.cmp;

              if (Ext.os.is.Phone) {
                  this.navButton.setHidden(false);
                  this.panelStyle = "";
              } else {
                  this.navButton.setHidden(true);
              }
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

              if(Ext.os.is.Phone) {
                  if (this.collapsed) {
                      this.collapsed = false;
                  } else {
                      this.collapsed = true;
                  }
              }
          },
          toggleTree: function(event) {
              if (this.collapsed) {
                  this.collapsed = false;
              } else {
                  this.collapsed = true;
              }
          }
      }
  }
</script>