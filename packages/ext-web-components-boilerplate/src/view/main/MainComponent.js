import './MainComponent.html';
export default class MainComponent {

  constructor() {
    const navTreeRoot = {
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
    this.collapsed = false;
    this.isInitial = true;

    if (Ext.os.is.Phone) {
      this.collapsed = true;
    }
  }

  afterAllLoaded() {
    this.wait = this.wait - 1;

    if (this.wait == 0) {
      let hash = window.location.hash.substr(1);

      if (hash == '') {
        hash = 'home';
      }

      const node = this.navTreelistCmp.getStore().findNode('hash',hash);
      this.navTreelistCmp.setSelection(node);
      this.navigate(node);
    }
  }

  readyNavTreePanel(event) {
    this.navTreePanelCmp = event.detail.cmp;
    this.afterAllLoaded('readyNavTreePanel');
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

  readyToggleButton(event) {
    const navButton = event.detail.cmp;

    if (Ext.os.is.Phone) {
      navButton.setHidden(false);
    } else {
      navButton.setHidden(true);
    }
  }

  navTreelistSelectionChange(event) {
    const record = event.detail.record;
    this.navigate(record);
  }

  navigate(record) {
    if (record == null) {
      console.log('it was null')
      return
    }
    const hash = record.data.hash
    const childNum = record.childNodes.length

    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash;
    } else {
      this.dataviewNavCmp.setData(node.childNodes)
    }

    if(Ext.os.is.Phone) {
      let collapsed = this.navTreePanelCmp.getCollapsed();

      if (collapsed === true) {
        collapsed = false;
      } else {
        collapsed = true;
      }
      this.navTreePanelCmp.setCollapsed(collapsed)
    }
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) {
      node.expand();
    }

    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  toggleTree() {
    let collapsed = this.navTreePanelCmp.getCollapsed();

    if (collapsed == true) {
      collapsed = false;
    } else {
      collapsed = true;
    }
    this.navTreePanelCmp.setCollapsed(collapsed);
  }

}
