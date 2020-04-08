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
        this.collapsed = false;
        this.isInitial = true;
        // if (Ext.os.is.Phone) {
        //     this.collapsed = true;
        // }
    }

    extnameToProperty = (cmpObj, me, suffix) => {
      if (suffix == undefined) {
          suffix = 'Cmp';
      }
      for (var prop in cmpObj) {
          me[prop+suffix] = cmpObj[prop];
      }
    }

    readyMainPanel = (event) => {
        this.extnameToProperty(event.detail.cmpObj, this, '');
        this.navButton.setHidden(false);
        this.navTreelist.setStore(this.treeStore);
        let hash = window.location.hash.substr(1);
        if (hash == '') {
            hash = 'home';
        }
        const node = this.navTreelist.getStore().findNode('hash', hash);
        this.navTreelist.setSelection(node);
        // if (Ext.os.is.Phone) {
        //     navButton.setHidden(false);
        // } else {
        //     navButton.setHidden(true);
        // }
    }

    navTreelistSelectionChange = (event) => {
        const record = event.detail.record;
        this.navigate(record);
    }

    navigate = (record) => {
        if (record == null) {
            console.log('it was null');
            return;
        }
        const hash = record.data.hash;
        const childNum = record.childNodes.length;

        if (childNum == 0 && hash != undefined) {
            window.location.hash = '#' + hash;
            if (window['router']) {window['router'].routeMe();}
        }

        if(Ext.os.is.Phone) {
            let collapsed = this.navTreePanel.getCollapsed();

            if (collapsed === true) {
                collapsed = false;
            } else {
                collapsed = true;
            }
            this.navTreepanel.setCollapsed(collapsed);
        }
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) {
            node.expand();
        }
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree = () => {
        let collapsed = this.navTreepanel.getCollapsed();
        if (collapsed == true) {
            collapsed = false;
        } else {
            collapsed = true;
        }
        this.navTreepanel.setCollapsed(collapsed);
    }
}