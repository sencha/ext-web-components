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

  selectionchange(event) {
    var record = event.detail.record
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {
      var className = record.data.className
      window[className.name] = new className()
      window.location.hash = '#' + hash
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

  test() {
    console.log('in test')
  }

  toggleTree() {
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

  readyButton1(event) {
    //var cmp = event.detail.cmp
  }

  readyButton2(event) {
    var cmp = event.detail.cmp
    cmp.setText('goodbye')
  }


}
