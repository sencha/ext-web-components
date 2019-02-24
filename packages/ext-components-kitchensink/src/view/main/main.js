import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
//import H_js from './H_js';
//hljs.registerLanguage('js', H_js);
import './main.css';

export default class main {

  constructor() {}

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  filterNav = (event) => {
    var value = event.detail.newValue
    this.filterRegex = new RegExp(`(${Ext.String.escapeRegex(value)})`, 'i');
    this.treelistCmp.getStore().filterBy(record => this.containsMatches(record));
  }

  toggleCode() {
    var collapsed = this.codePanelCmp.getHidden()
    if(collapsed == true) { collapsed = false }
    else { collapsed = true }
    this.codePanelCmp.setHidden(collapsed)
  }

  toggleTree() {
    var collapsed = this.treePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.treePanelCmp.setCollapsed(collapsed)
  }

  readyTreePanel(event) {
    var cmp = event.detail.cmp
    this.treePanelCmp = cmp
  }

  readyTreelist(event) {
    this.treelistCmp = event.detail.cmp
    var navTreeRoot = {
      id: '/',
      text: 'All',
      children: window.menu
    }
    this.transform(navTreeRoot, null); 
    var treeStore = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: navTreeRoot
    })
    this.treelistCmp.setStore(treeStore)
    var node = this.treelistCmp.getStore().findNode('hash', window.initHash);
    this.treelistCmp.setSelection(node);
  }

  transform(node, parentUrl) {
    node.leaf = !node.hasOwnProperty('children');
    node.iconCls = node.navIcon;
    if (node.text && !node.id) {
        node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
    }
    node.name = node.text;
    if (node.children) {
        node.children = node.children.filter(node => !node.hidden);
        node.children.forEach(child => this.transform(child, node.id))
    }
  }

  selectionchange(event) {
    var record = event.detail.record
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash
      this.setCodeTabs()
      var className = record.data.className
      window[className.name] = new className()
    }
  }

  cssClassName = (file) => {
  if (file.endsWith(".html")) {return 'html'}
  if (file.endsWith(".js")) {return 'js'}
  }

  setCodeTabs() {
    //mjg initial one is done twice
    var hash = window.location.hash.substr(1)
    if(window.location.hash.substr(1) == '') {
      //mjg loop through window.routes to find default
      hash = 'home'
      window.home = new window.routes[0].className;
    }
    var codeMap = _code[hash]
    var me = this
    if(me.tabPanelCmp != undefined) {
      me.tabPanelCmp.removeAll()
      //mjg order these html, js. css
      Object.keys(codeMap).map((file) => {
        me.tabPanelCmp.add({
          xtype: 'panel',
          ui: 'code-panel',
          layout: 'fit',
          userSelectable: true,
          scrollable: true,
          tab: {ui: 'app-code-tab', flex: 0, minWidth: 120},
          title: file,
          //html: `<pre><code mwlHighlightJs id='${file}' class='code ${this.cssClassName(file)}'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
          html: `<pre><code class='code'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        })
      })
      setTimeout(function() {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightBlock(block);
        });
      },50);
    }
  }

  readyCodePanel(event) {
    var cmp = event.detail.cmp
    this.codePanelCmp = cmp
  }

  readyTabPanel(event) {
    var cmp = event.detail.cmp
    this.tabPanelCmp = cmp
    this.setCodeTabs()
  }

}
