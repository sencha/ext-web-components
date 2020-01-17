<template>
  <ext-container viewport="true" v-on:ready="readyContainer($event)">
    <ext-treelist
      extname="treelist"
      ui="nav"
      expanderFirst="false"
      expanderOnly="false"
    >
    </ext-treelist>
  </ext-container>
</template>


<template>
  <ext-container viewport="true" v-on:ready="readyContainer($event)">
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
            extname="treelist"
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

            navItems: {
                type: 'tree',
                rootVisible: true,
                root: {
                    expanded: true,
                    text: 'All',
                    iconCls: 'x-fa fa-sitemap',
                    children: [{
                        text: 'Home',
                        iconCls: 'x-fa fa-home',
                        children: [{
                            text: 'Messages',
                            iconCls: 'x-fa fa-inbox',
                            leaf: true
                        }, {
                            text: 'Archive',
                            iconCls: 'x-fa fa-database',
                            children: [{
                                text: 'First',
                                iconCls: 'x-fa fa-sliders-h',
                                leaf: true
                            }, {
                                text: 'No Icon',
                                iconCls: null,
                                leaf: true
                            }]
                        }, {
                            text: 'Music',
                            iconCls: 'x-fa fa-music',
                            leaf: true
                        }, {
                            text: 'Video',
                            iconCls: 'x-fa fa-film',
                            leaf: true
                        }]
                    }, {
                        text: 'Users',
                        iconCls: 'x-fa fa-user',
                        children: [{
                            text: 'Tagged',
                            iconCls: 'x-fa fa-tag',
                            leaf: true
                        }, {
                            text: 'Inactive',
                            iconCls: 'x-fa fa-trash-alt',
                            leaf: true
                        }]
                    }, {
                        text: 'Groups',
                        iconCls: 'x-fa fa-users',
                        leaf: true
                    }, {
                        text: 'Settings',
                        iconCls: 'x-fa fa-wrench',
                        children: [{
                            text: 'Sharing',
                            iconCls: 'x-fa fa-share-alt',
                            leaf: true
                        }, {
                            text: 'Notifications',
                            iconCls: 'x-fa fa-flag',
                            leaf: true
                        }, {
                            text: 'Network',
                            iconCls: 'x-fa fa-signal',
                            leaf: true
                        }]
                    }]
                }



                
            }



          }


      },
      methods: {
          readyContainer: function(event) {
            var cmpObj = event.detail.cmpObj;
            this.treelist = cmpObj['treelist']
            //console.log(this.treelist)
            this.treelist.setStore(this.navItems);
              //const node = this.treeStore.findNode('hash', 'home');
              //this.navTreelistCmp.setSelection(node);
          },



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
              //this.navTreelistCmp.setStore(this.treeStore);
              //const node = this.treeStore.findNode('hash', 'home');
              //this.navTreelistCmp.setSelection(node);
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


//            store='{
//            "type": "tree",
 //           "rootVisible": true,
 //           "root": {
 //                     "hash": "all",
 //                     "iconCls": "x-fa fa-home",
 //                     "leaf": false,
 //                     "text": "All",
 //                   "children": [
 //       { "text": "Home", "hash": "home", "component": HomeComponent, "iconCls": "x-fa fa-home", "leaf": true },
 //       { "text": "About", "hash": "about", "component": AboutComponent, "iconCls": "x-fa fa-question", "leaf": true}
 //                   ]
 //                 }
 //           }'