var Common =
/*#__PURE__*/
function () {
  function Common() {}

  Common.createProps = function createProps(me, xtype, properties, events) {
    var o = {};
    o.xtype = xtype; //me.XTYPE;
    //if (o.xtype.substr(o.xtype.length - 6) == 'column') {

    if (o.xtype == 'column' || o.xtype == 'gridcolumn') {
      var renderer = me.getAttribute('renderer');

      if (renderer != undefined) {
        o.cell = me.cell || {};
        o.cell.xtype = 'renderercell'; //console.log(renderer)

        o.cell.renderer = renderer;
      }
    } //mjg fitToParent not working??


    if (true === me.fitToParent) {
      o.top = 0, o.left = 0, o.width = '100%', o.height = '100%';
    }

    for (var property in properties) {
      //me.PROPERTIESOBJECT
      if (me.getAttribute(property) !== null) {
        if (property == 'handler') {
          var functionString = me.getAttribute(property); //error check for only 1 dot

          var r = functionString.split('.');
          var obj = r[0];
          var func = r[1];
          o[property] = window[obj][func];
        } else {
          o[property] = me.filterProperty(me.getAttribute(property));
        }
      }
    }

    o.listeners = {}; // this would only add events to the ones that are
    // being used for this instance
    // for (var i = 0; i < me.attributes.length; i++) {
    //     var attr = me.attributes.item(i).nodeName;
    //     if (/^on/.test(attr)) {
    //     //if (/^on/.test(attr) && attr!='onitemdisclosure') {
    //         var name = attr.slice(2);
    //         var result = me.EVENTS.filter(obj => {return obj.name === name});
    //         me.setEvent(result[0],o,this)
    //     }
    // }
    //me.EVENTS

    events.forEach(function (eventparameter, index, array) {
      me.setEvent(eventparameter, o, me);
    });
    return o;
  };

  Common.createExtComponent = function createExtComponent(me) {
    //console.log('createExtComponent')
    if (me.currentComponent.node.s.props['viewport'] == true) {
      me.newDiv.remove();
      me.currentComponent.node.ext = Ext.create(me.currentComponent.node.s.props);
      console.log('Ext.application for ' + me.currentComponent.node.s.props.xtype + '(' + me.currentComponent.node.s.props.ewc + ')');
      Ext.application({
        name: 'MyEWCApp',
        launch: function launch() {
          Ext.Viewport.add([me.currentComponent.node.ext]);

          if (window.router) {
            window.router.init();
          }
        }
      });
    } else if (me.parentComponent == null) {
      //mjg console.log('1-parent of: ' + me.currentComponent.node.nodeName + ' is ' + me.node.parentNode.nodeName)
      me.currentComponent.node.s.props.renderTo = me.currentComponent.node; //me.currentComponent.node.s.newDiv; //me.shadowRoot;

      me.currentComponent.node.ext = Ext.create(me.currentComponent.node.s.props); //me.currentComponent.node.parentNode.replaceChild(me.currentComponent.node.ext.el.dom, me.currentComponent.node.s.newDiv)
      //console.log('replace newDiv')
    } else if (me.parentComponent.node.nodeName.substring(0, 4) != 'EXT-') {
      //mjg console.log('2-parent of: ' + me.currentComponent.node.nodeName + ' is ' + me.parentComponent.node.nodeName)
      me.currentComponent.node.s.props.renderTo = me.currentComponent.node; //me.currentComponent.node.s.newDiv; //me.shadowRoot;

      me.currentComponent.node.ext = Ext.create(me.currentComponent.node.s.props); //me.currentComponent.node.parentNode.replaceChild(me.currentComponent.node.ext.el.dom, me.currentComponent.node.s.newDiv)
    } else {
      //mjg console.log('3-parent of: ' + me.currentComponent.node.nodeName + ' is ' + me.parentComponent.node.nodeName)
      me.currentComponent.node.ext = Ext.create(me.currentComponent.node.s.props);
    } // else if (me.parentNode.nodeName.substring(0, 4) != 'EXT-') {
    //     console.log('parent of: ' + me.nodeName + ' is ' + me.parentNode.nodeName)
    //     o.renderTo = me.newDiv; //me.shadowRoot;
    //     me.ext = Ext.create(o)
    //     me.parentNode.replaceChild(me.ext.el.dom, me.newDiv)
    // }
    // else {
    //     console.log('parent of: ' + me.nodeName + ' is ' +'EXT')
    //     me.newDiv.remove()
    //     me.ext = Ext.create(o)
    // }

  };

  Common.assessChildren = function assessChildren(base, currentNode, parentNode, me) {
    //mjg console.log('assessChildren')
    if (currentNode.s.CHILDRENNODES == undefined) {
      //console.log('first time')
      //console.log(base.count)
      if (base.count == 0) {
        if (parentNode == null) {
          //currentNode.s.DIRECTION = 'TopToBottom'
          base.DIRECTION = 'TopToBottom';
        } else {
          //currentNode.s.DIRECTION = 'BottomToTop'
          base.DIRECTION = 'BottomToTop';
        } //mjg console.log('base.DIRECTION: ' + base.DIRECTION)

      }

      base.count++;
      currentNode.s.CHILDRENNODES = [];
      currentNode.s.CHILDRENCOMPONENTSCOUNT = 0; //mjg console.log(me._childComponents)

      currentNode.s.CHILDRENCOMPONENTS = me.childComponents;

      for (var i = 0; i < currentNode.s.CHILDRENCOMPONENTS.length; i++) {
        if (currentNode.s.CHILDRENCOMPONENTS[i].node.nodeName.substring(0, 4) == 'EXT-') {
          currentNode.s.CHILDRENCOMPONENTSCOUNT++;
        }
      }

      currentNode.s.CHILDRENCOMPONENTSLEFT = currentNode.s.CHILDRENCOMPONENTSCOUNT;
      currentNode.s.CHILDRENCOMPONENTSADDED = 0;
    } //mjg console.log('***')
    //mjg console.log('parentNode: ')
    //mjg console.dir(parentNode)
    //mjg console.log('CHILDRENCOMPONENTSCOUNT: ' + currentNode.s.CHILDRENCOMPONENTSCOUNT)
    //mjg console.log('CHILDRENCOMPONENTS: ')
    //mjg console.dir(currentNode.s.CHILDRENCOMPONENTS)
    //mjg console.log('CHILDRENCOMPONENTSLEFT: ' + currentNode.s.CHILDRENCOMPONENTSLEFT)
    //mjg console.log('***')


    if (me.currentComponent._extitems != undefined) {
      if (me.currentComponent._extitems.length == 1) {
        //if (this._hostComponent != null) {
        //mjg console.log('item')
        me.currentComponent.node.ext.setHtml(me.currentComponent._extitem.nativeElement); //}
      }
    }

    if (me.currentComponent._extitems != undefined) {
      if (me.currentComponent._extroutes.length == 1) {
        //mjg console.log('router')
        me.currentComponent.node.ext.setHtml(me.currentComponent._extroute.nativeElement); //childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
      }
    }

    if (currentNode.s.CHILDRENCOMPONENTSCOUNT == 0 && currentNode.s.CHILDRENCOMPONENTSLEFT == 0 && currentNode.s.CHILDRENCOMPONENTSADDED == 0 && parentNode == null) {
      //currentNode.s.DIRECTION = "Solo"
      //console.log(currentNode.s.DIRECTION)
      //mjg console.log('Solo')
      //var r = {detail: {cmp: currentNode.ext}}
      if (me.currentComponent._extitems != undefined) {
        me.currentComponent['ready'].emit({
          detail: {
            cmp: currentNode.ext
          }
        });
      } else {
        me.currentComponent.dispatchEvent(new CustomEvent('ready', {
          detail: {
            cmp: currentNode.ext
          }
        }));
      } //me.currentComponent.node.remove()


      return;
    } else if (currentNode.s.CHILDRENCOMPONENTSADDED > 0) {
      me.addChildren(currentNode, currentNode.s.CHILDRENNODES, me); //var r = {detail: {cmp: currentNode.ext}}
      //console.log(r)
      //me.currentComponent['ready'].emit({detail: {cmp: currentNode.ext}});

      if (me.currentComponent._extitems != undefined) {
        me.currentComponent['ready'].emit({
          detail: {
            cmp: currentNode.ext
          }
        });
      } else {
        me.currentComponent.dispatchEvent(new CustomEvent('ready', {
          detail: {
            cmp: currentNode.ext
          }
        }));
      } //me.currentComponent.node.remove()

    } else {
      //mjg console.log('NOT Solo')
      if (me.parentComponent != null && currentNode.s.CHILDRENCOMPONENTSCOUNT == 0) {
        //var r = {detail: {cmp: currentNode.ext}}
        //console.log(r)
        //me.currentComponent['ready'].emit({detail: {cmp: currentNode.ext}});
        if (me.currentComponent._extitems != undefined) {
          me.currentComponent['ready'].emit({
            detail: {
              cmp: currentNode.ext
            }
          });
        } else {
          me.currentComponent.dispatchEvent(new CustomEvent('ready', {
            detail: {
              cmp: currentNode.ext
            }
          }));
        }
      }
    }

    if (parentNode != null) {
      if (parentNode.s.CHILDRENNODES == undefined) {
        //mjg console.log('creating parentNode variables at a later time')
        parentNode.s.CHILDRENNODES = [];
        parentNode.s.CHILDRENCOMPONENTSCOUNT = 0;
        parentNode.s.CHILDRENCOMPONENTS = me.childComponents;

        for (var i = 0; i < parentNode.s.CHILDRENCOMPONENTS.length; i++) {
          if (parentNode.s.CHILDRENCOMPONENTS[i].node.nodeName.substring(0, 4) == 'EXT-') {
            parentNode.s.CHILDRENCOMPONENTSCOUNT++;
          }
        }

        parentNode.s.CHILDRENCOMPONENTSLEFT = parentNode.s.CHILDRENCOMPONENTSCOUNT;
        parentNode.s.CHILDRENCOMPONENTSADDED = 0;
      } else {//mjg console.log('parentNode variables are already created')
      }

      if (base.DIRECTION == 'TopToBottom') {
        //mjg console.log('TopToBottom')
        parentNode.s.CHILDRENNODES.push(me.currentComponent.node);
        parentNode.s.CHILDRENCOMPONENTSLEFT--;
      } else {
        //mjg console.log('BottomToTop')
        parentNode.s.CHILDRENNODES.push(me.currentComponent.node);
        parentNode.s.CHILDRENCOMPONENTSADDED++;
      } //mjg console.log('parent CHILDRENCOMPONENTSLEFT: ' + parentNode.s.CHILDRENCOMPONENTSLEFT)


      if (base.DIRECTION == "TopToBottom" && parentNode.s.CHILDRENCOMPONENTSLEFT == 0) {
        //mjg console.log('TopToBottom')
        //mjg console.log('no more children left')
        //mjg console.dir(parentNode)
        //mjg console.dir(parentNode.s.CHILDRENNODES)
        me.addChildren(parentNode, parentNode.s.CHILDRENNODES, me); //var r = {detail: {cmp: me.parentComponent.node.ext}}

        me.parentComponent['ready'].emit({
          detail: {
            cmp: parentNode.ext
          }
        });

        if (me.parentComponent._extitems != undefined) {
          me.parentComponent['ready'].emit({
            detail: {
              cmp: parentNode.ext
            }
          });
        } else {
          me.parentComponent.dispatchEvent(new CustomEvent('ready', {
            detail: {
              cmp: parentNode.ext
            }
          }));
        } //me.parentComponent.node.remove()

      } else {//mjg console.log('Still children left')
        }
    }
  };

  Common.addChildren = function addChildren(child, children, me) {
    //mjg console.log('addChildren')
    //mjg console.log(child)
    //mjg console.log(children)
    var childComponents = [];
    var childItem = {
      parentCmp: {},
      childCmp: {}
    };

    for (var i = children.length - 1; i > -1; i--) {
      var item = children[i];
      childItem = {
        parentCmp: {},
        childCmp: {}
      };
      childItem.parentCmp = child.ext;
      childItem.childCmp = item.ext;
      childComponents.push(childItem);
    }

    for (var i = childComponents.length - 1; i > -1; i--) {
      var childItem = {
        parentCmp: {},
        childCmp: {}
      };
      childItem = childComponents[i];
      me.addTheChild(childItem.parentCmp, childItem.childCmp, me);
    }
  };

  Common.addTheChild = function addTheChild(parentCmp, childCmp, me, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype; //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')')
    //if (childxtype == 'widget')

    if (me.node.ext.initialConfig.align != undefined) {
      if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button');
        return;
      }
    }

    var defaultparent = false;
    var defaultchild = false;

    switch (parentxtype) {
      case 'button':
        switch (childxtype) {
          case 'menu':
            parentCmp.setMenu(childCmp);
            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      case 'booleancolumn':
      case 'checkcolumn':
      case 'gridcolumn':
      case 'column':
      case 'templatecolumn':
      case 'gridcolumn':
      case 'column':
      case 'templatecolumn':
      case 'datecolumn':
      case 'dragcolumn':
      case 'numbercolumn':
      case 'selectioncolumn':
      case 'textcolumn':
      case 'treecolumn':
      case 'rownumberer':
        switch (childxtype) {
          case 'renderercell':
            parentCmp.setCell(childCmp);
            break;

          case 'column':
          case 'gridcolumn':
            parentCmp.add(childCmp);
            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      case 'grid':
      case 'lockedgrid':
        switch (childxtype) {
          case 'gridcolumn':
          case 'column':
          case 'treecolumn':
          case 'textcolumn':
          case 'checkcolumn':
          case 'datecolumn':
          case 'rownumberer':
          case 'numbercolumn':
          case 'booleancolumn':
            if (location == null) {
              if (parentxtype == 'grid') {
                parentCmp.addColumn(childCmp);
              } else {
                parentCmp.add(childCmp);
              }
            } else {
              var regCols = 0;

              if (parentCmp.registeredColumns != undefined) {
                regCols = parentCmp.registeredColumns.length;
              }

              if (parentxtype == 'grid') {
                //mjg console.log(parentCmp)
                parentCmp.insertColumn(location + regCols, childCmp);
              } else {
                parentCmp.insert(location + regCols, childCmp);
              }
            }

            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      default:
        defaultparent = true;
        break;
    }

    ;

    switch (childxtype) {
      case 'toolbar':
      case 'titlebar':
        if (parentCmp.getHideHeaders != undefined) {
          if (parentCmp.getHideHeaders() === false) {
            parentCmp.insert(1, childCmp);
          } else {
            parentCmp.add(childCmp);
          }
        } else {
          if (parentCmp.add != undefined) {
            if (location == null) {
              parentCmp.add(childCmp);
            } else {
              parentCmp.insert(location, childCmp);
            }
          } else {
            parentCmp.add(childCmp);
          }
        }

        break;

      case 'tooltip':
        parentCmp.setTooltip(childCmp);
        break;

      case 'plugin':
        parentCmp.setPlugin(childCmp);
        break;

      default:
        defaultchild = true;
        break;
    }

    if (defaultparent == true && defaultchild == true) {
      //console.log(parentxtype + '.add(' + childxtype + ')')
      parentCmp.add(childCmp);
    } // if (me.parentNode.childrenYetToBeDefined > 0) {
    //     me.parentNode.childrenYetToBeDefined--
    // }
    // //console.log('childrenYetToBeDefined(after) '  + me.parentNode.childrenYetToBeDefined)
    // if (me.parentNode.childrenYetToBeDefined == 0) {
    //     me.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: me.parentNode.ext}}))
    // }

  };

  Common.assessChildren2 = function assessChildren2(meNode, parentNode, me) {
    //console.log('assessChildren')
    var s = meNode.s; //var children = meNode.children;
    //var parentNode = parentNode;

    var parentEWS = false;

    if (parentNode.nodeName.substring(0, 4) == 'EXT-') {
      parentEWS = true;

      if (parentNode.s.CONNECTED == true) {//parentCONNECTED = true
      }
    } else {
      parentEWS = false; //parentCONNECTED = true
    } //var parentCONNECTED = false
    //meNode.s.CONNECTED = true


    meNode.s.EWSCHILDRENCOUNT = 0;

    for (var i = 0; i < meNode.children.length; i++) {
      if (meNode.children[i].nodeNameNode.substring(0, 4) == 'EXT-') {
        meNode.s.EWSCHILDRENCOUNT++;
      }
    }

    meNode.s.EWSCHILDRENLEFT = meNode.s.EWSCHILDRENCOUNT;

    if (meNode.s.EWSCHILDREN != undefined) {
      meNode.s.EWSCHILDRENLEFT = meNode.s.EWSCHILDRENCOUNT - meNode.s.EWSCHILDREN.length;
    }

    console.log('***');
    console.log('parentEWS: ' + parentEWS);
    console.log('children: ' + meNode.children.length); //console.log('parentCONNECTED: ' + parentCONNECTED)

    console.log('EWSCHILDRENCOUNT: ' + meNode.s.EWSCHILDRENCOUNT);

    if (parentEWS == true) {
      console.log('parent EWSCHILDRENCOUNT: ' + parentNode.s.EWSCHILDRENCOUNT);
      console.log('parent EWSCHILDRENLEFT: ' + parentNode.s.EWSCHILDRENLEFT);
    }

    console.log('EWSCHILDRENLEFT: ' + meNode.s.EWSCHILDRENLEFT);
    console.log('***');

    if (meNode.s.EWSCHILDRENCOUNT == 0) {
      //var me = this;
      //setTimeout(function(){
      meNode.dispatchEvent(new CustomEvent('ready', {
        detail: {
          cmp: meNode.ext
        }
      })); //}, 0);
      //this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
    } //if (s.EWSCHILDREN == undefined) {
    //    if (s.EWSCHILDRENCOUNT != 0) {
    //        // console.log('no children defined yet')
    //    }
    //}
    //else {
    //    // console.log('EWSCHILDREN.length: ' + s.EWSCHILDREN.length)
    //}


    if (parentEWS == true) {
      if (parentNode.s.EWSCHILDREN == undefined) {
        parentNode.s.DIRECTION = "BottomUp";
        parentNode.s.EWSCHILDREN = [];
      } else {
        parentNode.s.DIRECTION = "TopDown";
      }

      parentNode.s.EWSCHILDREN.push(this);
      parentNode.s.EWSCHILDRENLEFT--;

      if (parentNode.s.EWSCHILDRENLEFT == 0) {
        console.log('TOP to BOTTOM'); // console.log('this is the last child')
        // console.log('ready to go')
        // console.dir(this.parentNode)
        // console.dir(this.parentNode.children)
        // console.dir(this.parentNode.EWSCHILDREN)
        //var children = parentNode.children
        //var child = parentNode

        Common.addChildren(parentNode, parentNode.children, me);
        parentNode.dispatchEvent(new CustomEvent('ready', {
          detail: {
            cmp: parentNode.ext
          }
        })); // if (meNode.s.EWSCHILDRENCOUNT == 0) {
        //     console.log('remove')
        //     console.log(me)
        //     parentNode.remove(me)
        // }
      } else {// console.log('after EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)
      }
    }

    if (meNode.s.EWSCHILDREN == undefined) {
      meNode.s.EWSCHILDREN = [];
    }

    if (meNode.s.EWSCHILDRENCOUNT > 0 && meNode.s.EWSCHILDRENCOUNT == meNode.s.EWSCHILDREN.length || meNode.children.length > 0 && meNode.s.EWSCHILDRENCOUNT == 0) {
      //var children = meNode.children
      //var child = me
      console.log('BOTTOM to TOP'); // console.log('children were done first')
      // console.log('ready to go')
      // console.log(this.children)
      // console.log(this.EWSCHILDREN)
      // console.dir(this.children)
      // console.dir(child)

      meNode.addChildren(me, meNode.children, me);
      meNode.dispatchEvent(new CustomEvent('ready', {
        detail: {
          cmp: meNode.ext
        }
      })); //console.log(this.parentNode.EWSCHILDRENLEFT)
    } else {//console.log('after EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }
  };

  Common.addChildren2 = function addChildren2(child, children, me) {
    console.log('addChildren');
    var childItems = [];
    var childItem = {};

    for (var i = children.length - 1; i > -1; i--) {
      var item = children[i];

      if (item.nodeName.substring(0, 4) == 'EXT-') {
        childItem = {};
        childItem.parentCmp = child.ext;
        childItem.childCmp = item.ext;
        childItems.push(childItem);
      } else {
        childItem = {};
        childItem.parentCmp = child.ext;
        childItem.childCmp = Ext.create({
          xtype: 'widget',
          ext: item.getAttribute('ext'),
          element: Ext.get(item.parentNode.removeChild(item))
        });
        childItems.push(childItem);
      }
    }

    for (var i = childItems.length - 1; i > -1; i--) {
      var childItem = childItems[i];
      Common.addTheChild(childItem.parentCmp, childItem.childCmp, me);
    }
  };

  Common.addTheChild2 = function addTheChild2(parentCmp, childCmp, me, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype; //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')')
    //if (childxtype == 'widget')

    if (me.ext.initialConfig.align != undefined) {
      if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button');
        return;
      }
    }

    var defaultparent = false;
    var defaultchild = false;

    switch (parentxtype) {
      case 'button':
        switch (childxtype) {
          case 'menu':
            parentCmp.setMenu(childCmp);
            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      case 'booleancolumn':
      case 'checkcolumn':
      case 'gridcolumn':
      case 'column':
      case 'templatecolumn':
      case 'gridcolumn':
      case 'column':
      case 'templatecolumn':
      case 'datecolumn':
      case 'dragcolumn':
      case 'numbercolumn':
      case 'selectioncolumn':
      case 'textcolumn':
      case 'treecolumn':
      case 'rownumberer':
        switch (childxtype) {
          case 'renderercell':
            parentCmp.setCell(childCmp);
            break;

          case 'column':
          case 'gridcolumn':
            parentCmp.add(childCmp);
            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      case 'grid':
      case 'lockedgrid':
        switch (childxtype) {
          case 'gridcolumn':
          case 'column':
          case 'treecolumn':
          case 'textcolumn':
          case 'checkcolumn':
          case 'datecolumn':
          case 'rownumberer':
          case 'numbercolumn':
          case 'booleancolumn':
            if (location == null) {
              if (parentxtype == 'grid') {
                parentCmp.addColumn(childCmp);
              } else {
                parentCmp.add(childCmp);
              }
            } else {
              var regCols = 0;

              if (parentCmp.registeredColumns != undefined) {
                regCols = parentCmp.registeredColumns.length;
              }

              if (parentxtype == 'grid') {
                console.log(parentCmp);
                parentCmp.insertColumn(location + regCols, childCmp);
              } else {
                parentCmp.insert(location + regCols, childCmp);
              }
            }

            break;

          default:
            defaultparent = true;
            break;
        }

        break;

      default:
        defaultparent = true;
        break;
    }

    ;

    switch (childxtype) {
      case 'toolbar':
      case 'titlebar':
        if (parentCmp.getHideHeaders != undefined) {
          if (parentCmp.getHideHeaders() === false) {
            parentCmp.insert(1, childCmp);
          } else {
            parentCmp.add(childCmp);
          }
        } else {
          if (parentCmp.add != undefined) {
            if (location == null) {
              parentCmp.add(childCmp);
            } else {
              parentCmp.insert(location, childCmp);
            }
          } else {
            parentCmp.add(childCmp);
          }
        }

        break;

      case 'tooltip':
        parentCmp.setTooltip(childCmp);
        break;

      case 'plugin':
        parentCmp.setPlugin(childCmp);
        break;

      default:
        defaultchild = true;
        break;
    }

    if (defaultparent == true && defaultchild == true) {
      //console.log(parentxtype + '.add(' + childxtype + ')')
      parentCmp.add(childCmp);
    }

    if (me.parentNode.childrenYetToBeDefined > 0) {
      me.parentNode.childrenYetToBeDefined--;
    } //console.log('childrenYetToBeDefined(after) '  + me.parentNode.childrenYetToBeDefined)


    if (me.parentNode.childrenYetToBeDefined == 0) {
      me.parentNode.dispatchEvent(new CustomEvent('ready', {
        detail: {
          cmp: me.parentNode.ext
        }
      }));
    }
  };

  return Common;
}();

export { Common as default };