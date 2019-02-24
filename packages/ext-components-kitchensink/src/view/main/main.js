export default class main {

  constructor() {
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

  // getFiles = (node, allCode) => {
  //   const name = node.data.name.replace(/\s+/g, "");
  //   const codeMap = allCode[name] || {};
  //   const files = Object.keys(codeMap).map((file) => {
  //     return {
  //       name: file,
  //       code: `<pre><code mwlHighlightJs id='${file}' class='code ${cssClassName(file)}'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`,
  //       //code: `<pre><code mwlHighlightJs [source]="'${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}'" language="typescript"></code></pre>`
  //     };
  //   });
  
  //   return files;
  // };


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

  readyTreelist(event) {
    var treelistCmp = event.detail.cmp
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
    treelistCmp.setStore(treeStore)
    var node = treelistCmp.getStore().findNode('hash', window.initHash);
    treelistCmp.setSelection(node);
  }

  setCodeTabs() {
    var codeMap = _code[window.location.hash.substr(1)]
    var me = this
    if(me.tabPanelCmp != undefined) {
      me.tabPanelCmp.removeAll()
      Object.keys(codeMap).map((file) => {
        me.tabPanelCmp.add({
          xtype:'container',
          tab:{ui: 'app-code-tab', flex: 0, minWidth: 120},
          title:file,
          html:`<pre><code mwlHighlightJs id='${file}' class='code '>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        })
      })
    }
  }

  test() {
    console.log('in test')
  }

  readyTree(event) {
    var cmp = event.detail.cmp
    this.treeCmp = cmp
  }

  toggleTree() {
    var collapsed = this.treeCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.treeCmp.setCollapsed(collapsed)
    console.log('in toggleTree')
  }

  toggleCode() {
    console.log('in toggleCode')
    var collapsed = this.codePanelCmp.getHidden()
    if(collapsed == true) { collapsed = false }
    else { collapsed = true }
    this.codePanelCmp.setHidden(collapsed)
  }

  tap(event) {
    console.log('in tap')
  }

  readyCodePanel(event) {
    var cmp = event.detail.cmp
    this.codePanelCmp = cmp
  }

  readyTabPanel(event) {
    var cmp = event.detail.cmp
    this.tabPanelCmp = cmp
  }

  readyButton1(event) {
    //var cmp = event.detail.cmp
  }

  readyButton2(event) {
    var cmp = event.detail.cmp
    cmp.setText('goodbye')
  }

}
