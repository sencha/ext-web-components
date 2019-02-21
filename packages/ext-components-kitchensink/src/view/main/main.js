window.main = {

  transform: function (node, parentUrl) {
    node.leaf = !node.hasOwnProperty('children');
    node.iconCls = node.navIcon;
    if (node.text && !node.id) {
        node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
    }
    node.name = node.text;
    if (node.children) {
        node.children = node.children.filter(node => !node.hidden);
        node.children.forEach(child => main.transform(child, node.id))
    }
  },

  selectionchange: function(event) {
    var record = event.detail.record
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash
    }
  },

  readyTreelist: function(event) {
    var cmp = event.detail.cmp
    var navTreeRoot = {
      id: '/',
      text: 'All',
      children: window.menu
    }
    main.transform(navTreeRoot, null); 
    var treeStore = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: navTreeRoot
    })
    cmp.setStore(treeStore)
  },

  test: function() {
    console.log('in test')
  },

  toggleTree: function() {
    console.log('in toggleTree')
  },

  toggleCode: function() {
    console.log('in toggleCode')
    var collapsed = window.home.codePanelCmp.getHidden()
    if(collapsed == true) { collapsed = false }
    else { collapsed = true }
    window.home.codePanelCmp.setHidden(collapsed)
  },


  tap: function(event) {
    console.log('in tap')
  },

  readyCodePanel: function(event) {
    var cmp = event.detail.cmp
    window.home.codePanelCmp = cmp
  },

  readyButton1: function(event) {
    //var cmp = event.detail.cmp
  },

  readyButton2: function(event) {
    var cmp = event.detail.cmp
    cmp.setText('goodbye')
  }

}
