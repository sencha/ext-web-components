declare var Ext: any;
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styles: [``],
  templateUrl: './app.component.html'
})
export class AppComponent {
  treeStore: any;
  navTreeRoot: any;
  navTreelistCmp: any;
  search:any;
  collapsed:boolean;
  navTreePanelCmp:any;
  filterRegex:any;

  constructor(public router: Router) {
    this.navTreeRoot = {
      iconCls: 'x-fa fa-home',
      text: 'All',
      hash: 'all',
      leaf: false,
      children: [
        { text: 'Home',  hash: '/home', iconCls: 'x-fa fa-home', leaf: true, default:true},
        { text: 'About', hash: '/about', iconCls: 'x-fa fa-question',leaf:true }
      ]
    };
    this.treeStore = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: this.navTreeRoot
    });
    this.collapsed = false;

    if (Ext.os.is.Phone) {
        this.collapsed = true;
    }
  }
  
readyNavTreePanel = (event) => {
    this.navTreePanelCmp = event.detail.cmp;

    this.navTreePanelCmp.setCollapsed(this.collapsed);

}

afterAllLoaded = () => {
    let hash = window.location.pathname;

    if (hash === '') {
        hash = 'home';
    }

    const node = this.navTreelistCmp.getStore().findNode('hash', hash);
    this.navTreelistCmp.setSelection(node);
}

readyNavTreelist = (event) => {
    this.navTreelistCmp = event.detail.cmp;
    this.navTreelistCmp.setStore(this.treeStore);
    this.afterAllLoaded();
}

readyToggleButton = (event) => {
    const navButton = event.detail.cmp;

    if (Ext.os.is.Phone) {
        navButton.setHidden(false);
    } else {
        navButton.setHidden(true);
    }

    navButton.on('tap', this.toggleTree);
}

navTreelistSelectionChange = (event) => {
    const record = event.detail.info.node.data.text.toLowerCase().split(' ')[0];
    this.router.navigateByUrl(`/${record}`);

    if(Ext.os.is.Phone) {
        this.collapsed = !this.collapsed;
        this.navTreePanelCmp.setCollapsed(this.collapsed);
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
    if (this.collapsed) {
        this.collapsed = false;
    } else {
        this.collapsed = true;
    }
    this.navTreePanelCmp.setCollapsed(this.collapsed);
  }
}
