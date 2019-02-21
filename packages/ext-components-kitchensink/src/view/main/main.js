window.main = {}

function transform(node, parentUrl) {
  node.leaf = !node.hasOwnProperty('children');
  node.iconCls = node.navIcon;

  if (node.text && !node.id) {
      node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
  }

  node.name = node.text;

  if (node.children) {
      node.children = node.children.filter(node => !node.hidden);
      node.children.forEach(child => transform(child, node.id))
  }
}

main.selectionchange = function(event) {
  var record = event.detail.record
  var hash = record.data.hash
  var childNum = record.childNodes.length
  //console.log(childNum)
  //console.log(hash)
  if (childNum == 0 && hash != undefined) {
    window.location.hash = '#' + hash
  }
}

main.readyTreelist = function(event) {
//  console.log('readyTreelist')
  var cmp = event.detail.cmp
  var navTreeRoot = {
    id: '/',
    text: 'All',
    children: window.menu
    // children: [
    //   { text: 'Home', navIcon: 'icon-buttons', hash: 'home', leaf: true},
    //   { text: 'About', navIcon: 'icon-buttons', hash: 'about', leaf: true},
    //   { text: 'Components', navIcon: 'icon-buttons', leaf: true},
    //     { text: 'Components', navIcon: 'icon-buttons', children: [
    //         { text: 'Buttons', navIcon: 'icon-buttons', children: [
    //             { text: 'Button',  layout: 'center', navIcon: 'icon-buttons' },
    //             { text: 'SegmentedButton',  layout: 'center', navIcon: 'icon-segmented-buttons' },
    //             { text: 'SplitButton',  layout: 'center', navIcon: 'icon-buttons' },
    //         ]},
    //         { text: 'ColorPicker', layout: 'center', navIcon: 'icon-color-picker' },
    //         { text: 'Carousel', navIcon: 'icon-carousel' },
    //         { text: 'Drag & Drop', navIcon: 'icon-drag-drop', children: [
    //             { text: 'Simple',  navIcon: 'icon-drag-simple' },
    //             { text: 'Constraints',  navIcon: 'icon-drag-constraint' },

    //             { text: 'Files', navIcon: 'icon-drag-drop-element' }
    //         ]}
    //     ]}
    // ]
  }
  transform(navTreeRoot, null); 
  var treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })
  cmp.setStore(treeStore)
}



main.test = function() {
  console.log('in test')
}

main.toggleTree = function() {
  console.log('in toggleTree')
}

main.tap = function(event) {
  console.log('in tap')
}

main.readyButton1 = function(event) {
  console.log('readyButton1')
  var cmp = event.detail.cmp
  console.log(cmp)
  console.log(cmp.getText())
}

main.readyButton2 = function(event) {
  console.log('readyButton2')
  var cmp = event.detail.cmp
  console.log(cmp)
  console.log(cmp.getText())
  cmp.setText('goodbye')
}



// module.exports = {
//   test: function () {
//     console.log('ttest')
//   }
// };