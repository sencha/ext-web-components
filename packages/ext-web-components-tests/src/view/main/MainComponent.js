import hljs from 'highlightjs';
import "highlightjs/styles/atom-one-dark.css";
import "./MainComponent.html";
export default class MainComponent {

  constructor() {
    var navTreeRoot = {
      hash: 'all',
      iconCls: 'x-fa fa-home',
      leaf: false,
      text: 'All',
      children: window.menu
    };
    this.treeStore = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: navTreeRoot
    });
    this.wait = 3;
  }

  afterAllLoaded(f) {
    this.wait = this.wait - 1;
    console.log(this.wait)

    if (this.wait == 0) {
      var hash = window.location.hash.substr(1)
      if (hash == '') {hash = 'elementinsertbetween'}
      var node = this.navTreelistCmp.getStore().findNode('hash',hash);
      this.navTreelistCmp.setSelection(node);
      this.navigate(node);
    }
  }

  readyNavTreePanel(event) {
    this.navTreePanelCmp = event.detail.cmp
    this.afterAllLoaded('readyNavTreePanel')

    if(Ext.os.is.Phone) {
      this.navTreePanelCmp.setCollapsed(true);
    } else {
      this.navTreePanelCmp.setCollapsed(false);
    }
  }

  readyNavTreelist(event) {
    this.navTreelistCmp = event.detail.cmp
    this.navTreelistCmp.setStore(this.treeStore)
    this.afterAllLoaded('readyNavTreelist')
  }

  readyRouter(event) {
    this.router = event.target;
    this.afterAllLoaded('readyRouter')
  }

  navTreelistSelectionChange {
    var record = event.detail.record;
    this.navigate(record);
  }

  navigate(record) {
    if (record == null) {
      console.log('it was null')
      return
    }
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash;
    }
    else {
      this.dataviewNavCmp.setData(node.childNodes)
    }

    if(Ext.os.is.Phone) {
      var collapsed = this.navTreePanelCmp.getCollapsed()
      if (collapsed == true){collapsed = false} else{collapsed = true}
      this.navTreePanelCmp.setCollapsed(collapsed)
    }
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  toggleTree() {
    var collapsed = this.navTreePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.navTreePanelCmp.setCollapsed(collapsed)
  }

  toggleButtonReady(event) {
    const navButton = event.detail.cmp;

    if (Ext.os.is.Phone) {
      navButton.setHidden(false);
    } else {
      navButton.setHidden(true);
    }
  }
}
