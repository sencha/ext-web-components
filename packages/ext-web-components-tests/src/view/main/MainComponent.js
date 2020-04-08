//import { extnameToProperty } from "@sencha/ext-web-components-modern/src/util.js";
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.html';
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

    extnameToProperty = (cmpObj, me, suffix) => {
      if (suffix == undefined) {
          suffix = 'Cmp';
      }
      for (var prop in cmpObj) {
          me[prop+suffix] = cmpObj[prop];
      }
  }

    viewportReady = event => {
      console.log(event)
        this.navInProcess = false;
        this.extnameToProperty(event.detail.cmpObj, this, '');
        this.navTreelist.setStore(this.treeStore);
        var hash = window.location.hash.substr(1);
        if (hash == '') {hash = 'all';}
        var node = this.navTreelist.getStore().findNode('hash', hash);
        this.navigate('load', node);
        this.secondaryComponentsView.setHidden(true);
    }

    afterAllLoaded = () => {
        this.wait = this.wait - 1;
    }

    navTreelistSelectionChange = (event) => {
        var record = event.detail.record;
        this.navigate('tree', record);
    }

    navigate = (who, node) => {
        if (this.navInProcess) {
            //console.log('nav in process, request from ' + who);
            return;
        }
        if (node == null) {
            return;
        }

        this.navInProcess = true;

        var hash = node.data.hash;
        var childNum = node.childNodes.length;

        // this.breadcrumb.setSelection(node);
        this.navTreelist.setSelection(node);

        if (childNum == 0 && hash != undefined) {
            window.location.hash = `#${hash}`;
            this.showRouter();
        } else {
            this.componentsView.setHidden(true);
        }

        this.navInProcess = false;
    };

    showRouter = () => {
        window.router.hidden = false;
        this.componentsView.setHidden(false);
        console.log('routeme');
        window.router.routeMe();
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree = () => {
        var collapsed = this.navTreePanel.getCollapsed();
        if (collapsed == true){collapsed = false;} else{collapsed = true;}
        this.navTreePanel.setCollapsed(collapsed);
    }

    toggleButtonReady = (event) => {
        const navButton = event.detail.cmp;

        if (Ext.os.is.Phone) {
            navButton.setHidden(false);
        } else {
            navButton.setHidden(true);
        }
    }
}
