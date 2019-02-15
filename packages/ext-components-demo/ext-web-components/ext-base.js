class ExtBase extends HTMLElement {

  constructor() {
    super();
  }

  addTheChild(parentCmp, childCmp) {
    var parentxtype = parentCmp.xtype
    var childxtype = childCmp.xtype

    if (this.ext.initialConfig.align != undefined) {
      if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button')
        return
      }
    }
    if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
      if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn' ) {
        parentCmp.addColumn(childCmp)
        return
      }
      else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
        if (parentCmp.getHideHeaders() === false) {
          parentCmp.insert(1, childCmp);
          //console.log('**')
          return
        }
        else {
          parentCmp.add(childCmp);
          //console.log('**')
          return
        }
      }
      else {
        console.log('unhandled else in addTheChild')
        console.log(parentxtype)
        console.log(childxtype)
      }
    } 
    if (childxtype === 'tooltip') {
      parentCmp.setTooltip(childCmp)
      //console.log('**')
      return
    } 
    if (childxtype === 'plugin') {
      parentCmp.setPlugin(childCmp)
      //console.log('**')
      return
    } 
    else if (parentxtype === 'button') {
      if (childxtype === 'menu') {
        parentCmp.setMenu(childCmp)
        //console.log('**')
        return
      } else {
        console.log('child not added')
      }
    } 
    if (childxtype === 'toolbar' && Ext.isClassic === true) {
      parentCmp.addDockedItems(childCmp)
      //console.log('**')
      return
    } 
    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
      if (parentCmp.getHideHeaders() === false) {
        parentCmp.insert(1, childCmp)
        //console.log('**')
        return
      } else {
        parentCmp.add(childCmp)
        //console.log('**')
        return
      }
    } 
     if (parentCmp.add != undefined) {
      parentCmp.add(childCmp)
      //console.log('**')
      return
    }
    console.log('child not added')
  }

  connectedCallback(o) {
    var nodeName = this.nodeName
    var nodeParentName = this.parentNode.nodeName
    console.dir(nodeName + ' ,parent: ' + nodeParentName)
    var parentCmp = this.parentNode['ext']
    var childCmp;

    var me = this
    if (nodeParentName == 'BODY') {
      Ext.application({
        name: 'MyExtWCApp',
        launch: function () {
          console.log('\nXTYPE: ' + o.xtype)
          console.log('parent: ' + nodeParentName)
          me.ext = Ext.create(o)
          if (nodeParentName == 'BODY') {
            Ext.Viewport.add([me.ext])
          }
        }
      });
    }
    else{
      Ext.onReady(function(){
        console.log('\nXTYPE: ' + o.xtype)
        console.log('parent: ' + nodeParentName)
        me.ext = Ext.create(o)
        parentCmp = me.parentNode['ext'];
        childCmp = me.ext;
        console.log(`parentCmp: ${parentCmp.xtype} childCmp: ${childCmp.xtype}`)
        me.addTheChild(parentCmp, childCmp)
      });
    }
  }

}