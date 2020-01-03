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
        { text: 'Home',  hash: '/home', iconCls: 'x-fa fa-home', leaf: true, default:true },
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

  readyPage = (event) => {
    for (var prop in event.detail.cmpObj) {
      this[prop] = event.detail.cmpObj[prop];
    }
    this['navTreelist'].setStore(this.treeStore);
    if (Ext.os.is.Phone) {
      this['toggleButton'].setHidden(false);
    } else {
      this['toggleButton'].setHidden(false);
    }
    this['toggleButton'].on('tap', this.toggleTree);
    let hash = window.location.hash.substr(1);
    if (hash === '') {
        hash = '/home';
    }
    const node = this['navTreelist'].getStore().findNode('hash', hash);
    this.navigate('ready', node);
  }

  navInProcess: any = false;
  navigate = (who, node) => {
    if (this.navInProcess == true) {
      //console.log('nav in process, request from ' + who);
      return;
    }
    if (node == null) {
      //console.log('it was null');
      return;
    }
    this.navInProcess = true;
    const hash = node.data.hash;
    const childNum = node.childNodes.length;
    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash;
      const record = node.data.text.toLowerCase().split(' ')[0];
      this.router.navigateByUrl(`/${record}`);
    }
    this['navTreelist'].setSelection(node);
    this.navInProcess = false;
  }

  navTreelistSelectionChange = (event) => {
    const node = event.detail.info.node;
    this.navigate('treelist', node);
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
    this['navTreePanel'].setCollapsed(this.collapsed);
  }

}
