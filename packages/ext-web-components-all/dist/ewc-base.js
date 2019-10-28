import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/wrapNativeSuper";
//Thu Oct 24 2019 09:00:27 GMT-0400 (Eastern Daylight Time)
import { doProp, filterProp, isMenu, isRenderercell, isParentGridAndChildColumn, isTooltip, isPlugin } from './util.js';

var EwcBaseComponent =
/*#__PURE__*/
function (_HTMLElement) {
  _inheritsLoose(EwcBaseComponent, _HTMLElement);

  function EwcBaseComponent(properties, events) {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.properties = properties;
    _this.events = events;
    return _this;
  }

  var _proto = EwcBaseComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    var _this2 = this;

    console.log('connectedCallback');
    console.log(this.xtype);
    var x = this.xtype; //var props = ['text','align','title','extname','height','width','columns','data','layout','flex']
    // props.forEach( prop =>
    //     {
    //         doProp(this,prop)
    //     }
    // )

    var distinct = function distinct(value, index, self) {
      return self.indexOf(value) === index;
    };

    var properties2 = []; //console.log(typeof properties2)
    //var myStringArray = ["Hello","World"];

    var arrayLength = this.properties.length;

    for (var i = 0; i < arrayLength; i++) {
      properties2.push(this.properties[i]);
    } //console.log(properties2)
    //console.log(typeof properties2)


    var p2 = properties2.filter(distinct); //this.properties = p2;

    p2.forEach(function (prop) {
      doProp(_this2, prop);
    }); //this.methods = methods;
    //this.events = events;

    EwcBaseComponent.elementcount++;
    console.log('added: ' + this.tagName + ': elementcount is now ' + EwcBaseComponent.elementcount);
    EwcBaseComponent.elements.push(this);
    this.A = {};
    this.A.CHILDREN = [];
    this.A.ITEMS = [];
    this.A.o = {}; //console.log(this.children)

    for (var _iterator = this.children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var child = _ref;

      if (child.nodeName.substring(0, 4) !== 'EXT-') {
        var el = Ext.get(child);
        var w = Ext.create({
          xtype: 'widget',
          element: el
        });
        this.A.ITEMS.push(w);
      } else {
        var g = {};
        g.type = 'ext';
        this.A.ITEMS.push(g);
      }
    } //for (let child of this.children) {
    //    //console.dir(child)
    //    if (child.nodeName.substring(0, 4) !== 'EXT-') {
    //        //console.log(child);
    //        var el = Ext.get(child);
    //        var w = Ext.create({xtype:'widget', element: el});
    //        //this.A.CHILDREN.push(w);
    //    }
    //}


    this.base = EwcBaseComponent; //this.properties = []
    //for (var property in this.propertiesobject) {
    //    this.properties.push(property)
    //}
    // this.newDiv = document.createElement('div');
    // //var textnode = document.createTextNode(this.xtype);
    // //this.newDiv.appendChild(textnode)
    // this.insertAdjacentElement('beforebegin', this.newDiv);

    this.xtype = x;
  };

  _proto.parsedCallback = function parsedCallback() {
    this.initMe();
  } //******* base start */
  ;

  _proto.initMe = function initMe() {
    this.newParsedCallback();
    return; //console.log('');console.log('*** initMe for ' + this.currentElName);

    this.createRawChildren();
    this.setParentType();
    this.setDirection();
    this.figureOutA();
    this.createProps(this.properties, this.events);
    this.createExtComponent();
  };

  _proto.newParsedCallback = function newParsedCallback() {
    var me = this;
    this.newCreateProps(this.properties, this.events);

    if (this.parentNode != null && this.parentNode.nodeName.substring(0, 4) !== 'EXT-') {
      this.A.o.renderTo = this; //.parentNode;
      //this.A.o.renderTo = this.newDiv.parentNode;
      //this.newDiv.parentNode.removeChild(this.newDiv);
    } // this.A.o.listeners = {}
    // this.events.forEach(function (event, index, array) {
    //     me.setEvent(event,me.A.o,me)
    // })


    this.newDoExtCreate(me, this.A.o['viewport']);
  };

  _proto.newCreateProps = function newCreateProps(properties) {
    //console.log('store prop')
    //console.log(this.store)
    var listenersProvided = false;
    var o = {};
    o.xtype = this.xtype;

    if (this['config'] !== {}) {
      Ext.apply(o, this['config']);
    }

    if (true === this.fitToParent) {
      o.height = '100%';
    }

    if (o.xtype == 'column' || o.xtype == 'gridcolumn') {
      //replace above with call from util
      var renderer = this.getAttribute('renderer');

      if (renderer != undefined) {
        o.cell = this.cell || {};
        o.cell.xtype = 'renderercell'; //console.log(renderer)

        o.cell.renderer = renderer;
      }
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      if (this.getAttribute(property) !== null) {
        if (property == 'handler') {
          // if (this[property] != undefined) {
          //     o[property] = this[property];
          // }
          var functionString = this.getAttribute(property); //error check for only 1 dot

          var r = functionString.split('.');
          var obj = r[0];
          var func = r[1];
          o[property] = window[obj][func];
        } // else if ((o.xtype === 'cartesian' || o.xtype === 'polar') && property === 'layout') {
        // }
        else if (property == 'listeners' && this[property] != undefined) {
            o[property] = this[property];
            listenersProvided = true;
          } else if (property == 'config') {
            var configs = JSON.parse(this.getAttribute(property));

            for (var configProp in configs) {
              if (configs.hasOwnProperty(configProp)) {
                //o[configProp] = filterProp(configs[configProp], property, this);
                o[configProp] = filterProp(this.getAttribute(configs[configProp]), configProp, this);
              }
            }
          } else if (this[property] != undefined && property != 'listeners' && property != 'config' && property != 'handler' && property != 'fitToParent') {
            //props[property] = property[prop];
            //console.log('here??')
            //console.log(property)
            o[property] = filterProp(this.getAttribute(property), property, this);
          } // else {
        //     o[property] = filterProp(this.getAttribute(property));
        // }

      }

      if (!listenersProvided) {
        o.listeners = {};
        var me = this;
        this.events.forEach(function (event, index, array) {
          me.setEvent(event, o, me);
        });
      }
    }

    this.A.o = o;
  };

  _proto.newDoExtCreate = function newDoExtCreate(me, isApplication) {
    //if (Ext != undefined) {
    if (window['Ext'] != undefined) {
      EwcBaseComponent.isLoading = true;
      EwcBaseComponent.isDone = true;
    }

    if (EwcBaseComponent.isLoading == false) {
      EwcBaseComponent.isLoading = true;
      var csstag = document.createElement("script");
      csstag.type = "text/javascript";
      csstag.src = "../ext/css.all.js";

      csstag.onload = function () {
        var exttag = document.createElement("script");
        exttag.type = "text/javascript";
        exttag.src = "../ext/ext.all.js";

        exttag.onload = function () {
          EwcBaseComponent.isDone = true;
        };

        document.getElementsByTagName('head')[0].appendChild(exttag);
      };

      document.getElementsByTagName('head')[0].appendChild(csstag);
    }

    var myVar = setInterval(function () {
      if (EwcBaseComponent.isDone === true) {
        clearInterval(myVar);
        Ext.onReady(function () {
          //console.log(me.A.o)
          me.A.ext = Ext.create(me.A.o);
          me.A.CHILDREN.forEach(function (child) {
            me.addTheChild(me.A.ext, child);
          }); //console.dir(me)

          if (me.parentNode != null && me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
            if (me.parentNode.A.ext !== undefined) {
              me.addTheChild(me.parentNode.A.ext, me.A.ext);
            } else {
              me.parentNode.A.CHILDREN.push(me.A.ext);
            }
          }

          if (isApplication) {
            Ext.application({
              name: 'MyEWCApp',
              launch: function launch() {
                Ext.Viewport.add([me.A.ext]);
              }
            });
          }

          EwcBaseComponent.elementcount--; //console.log('reduced: ' + me.tagName + ': elementcount reduced to ' + EwcBaseComponent.elementcount)

          if (EwcBaseComponent.elementcount == 0) {
            //console.log('done');
            //console.log(EwcBaseComponent.elements);
            EwcBaseComponent.elementsprior = [].concat(EwcBaseComponent.elements);
            EwcBaseComponent.elements = []; //console.log(EwcBaseComponent.elementsprior);

            var allExt = [];
            EwcBaseComponent.elementsprior.forEach(function (element) {
              //console.dir(element)
              if (element.A != undefined) {
                for (var i = 0; i < element.A.ITEMS.length; i++) {
                  //console.log(element.A.ITEMS[i])
                  if (element.A.ITEMS[i].xtype == 'widget') {
                    //console.log('do it for ' + i)
                    //console.log(me)
                    //console.dir(element)
                    //console.log(me.A.ext)
                    //console.log(element.A.ITEMS[i])
                    //element.A.ext.insert(i,element.A.ITEMS[i])
                    element.addTheChild(element.A.ext, element.A.ITEMS[i], i);
                  }
                }
              } //console.log('after loop')


              if (element.getAttribute('extname') != undefined) {
                var o = {};
                o.extname = element.getAttribute('extname');
                o.ext = element.A.ext;
                o.cmp = element.A.ext;
                allExt.push(o);
              }
            }); //console.log(EwcBaseComponent.elementsprior)

            EwcBaseComponent.elementsprior.forEach(function (element) {
              //console.dir(element)
              element.dispatchEvent(new CustomEvent('ready', {
                detail: {
                  cmp: element.A.ext,
                  allCmp: allExt,
                  ext: element.A.ext,
                  allExt: allExt
                }
              }));
            });
          }
        });
      }
    }, 0);
  };

  _proto.addTheChild = function addTheChild(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype; //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')

    if (this.A.ext.initialConfig.align != undefined) {
      if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button');
        return;
      }
    }

    switch (true) {
      case isMenu(childxtype):
        parentCmp.setMenu(childCmp);
        break;

      case isRenderercell(childxtype):
        parentCmp.setCell(childCmp);
        break;

      case isParentGridAndChildColumn(parentxtype, childxtype):
        if (location == null) {
          parentCmp.addColumn(childCmp);
        } else {
          var regCols = 0;

          if (parentCmp.registeredColumns != undefined) {
            regCols = parentCmp.registeredColumns.length;
          }

          if (parentxtype == 'grid') {
            parentCmp.insertColumn(location + regCols, childCmp);
          } else {
            parentCmp.insert(location + regCols, childCmp);
          }
        }

        break;

      case isTooltip(childxtype):
        parentCmp.setTooltip(childCmp);
        break;

      case isPlugin(childxtype):
        parentCmp.setPlugin(childCmp);
        break;

      default:
        if (location == null) {
          parentCmp.add(childCmp);
        } else {
          parentCmp.insert(location, childCmp);
        }

    }
  };

  _proto.createRawChildren = function createRawChildren() {
    if (this.currentEl.isAngular) {
      this.currentEl.rawChildren = this.currentEl.childComponents;
    } else {
      this.currentEl.ewcChildren = Array.from(this.currentEl.children);
      this.currentEl.rawChildren = [];
      var num = 0;

      for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
        if (this.currentEl.ewcChildren[i].xtype != undefined) {
          this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
          num++;
        } else {//do something with div (add an Ext.widget...)
        }
      }
    }
  };

  _proto.setParentType = function setParentType() {
    if (this.parentNode == null) {
      this.parentType = 'html';
    } else {
      if (this.parentElName.substring(0, 4) == 'EXT-') {
        this.parentType = 'ext';
      } else {
        this.parentType = 'html';
      }
    }
  };

  _proto.setDirection = function setDirection() {
    if (this.base.count == 0) {
      this.base.count++; //        if (this.hasParent == false) {

      if (this.parentType != 'ext') {
        this.base.DIRECTION = 'TopToBottom';
      } else {
        //if (this.parentElName.substring(0, 4) == 'EXT-') {
        this.base.DIRECTION = 'BottomToTop'; //}
        //else {
        //    this.base.DIRECTION = 'TopToBottom';
        //}
      }
    } //console.log(this.base.DIRECTION);

  };

  _proto.figureOutA = function figureOutA() {
    if (this.parentType == 'ext' && this.parentEl.A == undefined && this.parentEl.nodeName.substring(0, 4) == 'EXT-') {
      this.init(this.parentEl);
    }

    if (this.currentEl.A == undefined) {
      this.init(this.currentEl);
    }
  };

  _proto.init = function init(component) {
    component.A = {};
    component.A.props = {};
    component.A.xtype = component.xtype;
    component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
    component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
    component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
    component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
  };

  _proto.createExtComponent = function createExtComponent() {
    var A = this.currentEl.A; //console.dir(A)

    var meA = A;
    var methis = this;

    if (methis.base.DIRECTION == 'BottomToTop') {
      //console.log('BTT')
      if (A.props['viewport'] == true) {
        //this.newDiv.parentNode.removeChild(this.newDiv);
        if (this.parentType == 'html') {
          this.doExtCreate(meA, methis, true); // Ext.onReady(function () {
          //     methis.currentEl.A.ext = Ext.create(meA.props);
          //     console.log('0-Ext.application: ' + meA.props.xtype);
          //     methis.assessChildren(methis.base, methis.xtype);
          //     Ext.application({
          //         name: 'MyEWCApp',
          //         launch: function () {
          //             Ext.Viewport.add([methis.currentEl.A.ext]);
          //             if (window['router']) {window['router'].init();}
          //             methis.sendReadyEvent(methis);
          //         }
          //     });
          // });
        } else {
          console.error('error: viewport not allowed on this element');
        }
      } else {
        if (this.parentType == 'html') {
          meA.props.renderTo = this.newDiv;
        }

        if (methis.currentElName == 'EXT-DIALOG') {
          meA.props.renderTo = null;
        }

        this.doExtCreate(meA, methis, false);
      }
    } else {
      //console.log('TopToBottom')
      if (A.props['viewport'] == true) {
        //this.newDiv.parentNode.removeChild(this.newDiv);
        if (this.parentType == 'html') {
          this.doExtCreate(meA, methis, true);
        } else {
          console.error('error: viewport not allowed on this element');
        }
      } else {
        console.log(this.parentType);

        if (this.parentType == 'html') {
          meA.props.renderTo = this.newDiv;
        }

        this.doExtCreate(meA, methis, false);
      }
    }
  };

  _proto.doExtCreate = function doExtCreate(meA, methis, isApplication) {
    if (EwcBaseComponent.isLoading == false) {
      EwcBaseComponent.isLoading = true;
      var csstag = document.createElement("script");
      csstag.type = "text/javascript";
      csstag.src = "../ext/css.grid.js";

      csstag.onload = function () {
        var exttag = document.createElement("script");
        exttag.type = "text/javascript";
        exttag.src = "../ext/ext.grid.js";

        exttag.onload = function () {
          EwcBaseComponent.isDone = true;
        };

        document.getElementsByTagName('head')[0].appendChild(exttag);
      };

      document.getElementsByTagName('head')[0].appendChild(csstag);
    }

    var myVar = setInterval(function () {
      if (EwcBaseComponent.isDone === true) {
        clearInterval(myVar);
        Ext.onReady(function () {
          //console.log('Ext is there')
          console.log(meA.props);
          methis.currentEl.A.ext = Ext.create(meA.props);
          methis.assessChildren(methis.base, methis.xtype);

          if (isApplication) {
            Ext.application({
              name: 'MyEWCApp',
              launch: function launch() {
                Ext.Viewport.add([methis.currentEl.A.ext]);

                if (window['router']) {
                  window['router'].init();
                }

                methis.sendReadyEvent(methis);
              }
            });
          }

          console.log(EwcBaseComponent.elementcount);
          EwcBaseComponent.elementcount--;

          if (EwcBaseComponent.elementcount == 0) {
            console.log('done');
            var allExt = []; // for (var i = 0; i < ExtElement.elements.length; i++) {
            //     if (ExtElement.elements[i].getAttribute('extname') != undefined) {
            //         var o = {extname:ExtElement.elements[i].getAttribute('extname'),ext:ExtElement.elements[i].A.ext}
            //         console.log(o)
            //         allExt.push(o);
            //         console.log(allExt)
            //       }
            // }

            EwcBaseComponent.elements.forEach(function (element) {
              if (element.getAttribute('extname') != undefined) {
                var o = {};
                o.extname = element.getAttribute('extname');
                o.ext = element.A.ext;
                allExt.push(o);
              }
            });
            EwcBaseComponent.elements.forEach(function (element) {
              console.dir(element);
              element.dispatchEvent(new CustomEvent('ready', {
                detail: {
                  ext: element.A.ext,
                  allExt: allExt //allElements: ExtElement.elements

                }
              }));
            });
          }
        });
      }
    }, 0);
  };

  _proto.assessAngularChildren = function assessAngularChildren(base, xtype, A) {
    if (this._extitems != undefined) {
      if (this._extitems.length == 1) {
        var el = Ext.get(this._extitem.nativeElement);
        var w = Ext.create({
          xtype: 'widget',
          element: el
        });
        this.addTheChild(A.ext, w, null);
      }
    } // if (this._extitems != undefined) {
    //     if (this._extroutes.length == 1) {
    //         A.ext.setHtml(this._extroute.nativeElement);
    //     }
    // }

  };

  _proto.assessChildren = function assessChildren(base, xtype) {
    //console.log('assessChildren for: ' + xtype);
    var A = this.currentEl.A;
    this.assessAngularChildren(base, xtype, A);

    if (base.DIRECTION == 'BottomToTop') {
      if (A.CHILDRENCOMPONENTSCOUNT == 0 && A.CHILDRENCOMPONENTS.length == 0 && this.parentType == 'html') {
        //console.log('Solo');
        //console.log('1- ready event for ' + this.currentElName);
        this.sendReadyEvent(this);
      } else if (A.CHILDRENCOMPONENTSADDED > 0) {
        this.addChildren(this, A.CHILDRENCOMPONENTS); //this.node.remove(); ?? is this needed??
      }

      if (this.parentType != 'ext') {
        if (base.DIRECTION == 'BottomToTop') {
          //console.log('5- ready event for ' + this.currentElName);
          this.sendReadyEvent(this);
        }
      }

      if (this.parentType == 'ext') {
        if (base.DIRECTION == 'BottomToTop') {
          this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
          this.parentEl.A.CHILDRENCOMPONENTSADDED++; //console.log('4- ready event for ' + this.currentElName);

          this.sendReadyEvent(this);
        } else {
          this.parentEl.A.CHILDRENCOMPONENTSLEFT--;

          if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
            this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS); //console.log('3- ready event for ' + this.parentElName + '(parent)');

            this.sendReadyEvent(this.parentEl);
          }
        }
      }
    } else {
      //base.DIRECTION == 'TopToBottom'
      if (this.parentType == 'ext') {
        //console.log('this: ' + A.xtype + ' ' + A.props.title + ' parent: ' + this.parentEl.A.xtype)
        //console.log('length=0, send ready for ' + this.xtype)
        this.sendReadyEvent(this);
      } // else {
      //     //console.log(A.props)
      //     //console.log('this: ' + A.xtype + ' ' + A.props.title + ' root: ')
      // }


      if (A.CHILDRENCOMPONENTS.length == 0) {
        //console.log('no CHILDRENCOMPONENTS')
        this.checkParent(this.parentEl, base, this);
      } else {//console.log('else 2')
        //console.log(A.CHILDRENCOMPONENTS.length + ' CHILDRENCOMPONENTS')
        //     //base.COMPONENTCOUNT = base.COMPONENTCOUNT + A.CHILDRENCOMPONENTS.length;
      }
    }
  };

  _proto.checkParent = function checkParent(component, base, me) {
    if (component == null || component.localName.substring(0, 4) != 'EXT-') {
      console.log('send ready for ' + me.nodeName); //}
      //else {

      if (component != null) {
        if (component.A != null) {
          console.log(component);
          component.A.CHILDRENCOMPONENTSLEFT--;
          console.log('now left for ' + component.localName + ' ' + component.A.CHILDRENCOMPONENTSLEFT); //base.COMPONENTLEFTCOUNT = base.COMPONENTLEFTCOUNT + 1;

          if (component.A.CHILDRENCOMPONENTSLEFT == 0) {
            this.addChildren(component, component.A.CHILDRENCOMPONENTS);
            this.checkParent(component.parentEl, base, component);
          }
        }
      }
    }
  };

  _proto.addChildren = function addChildren(child, children) {
    for (var i = 0; i < children.length; i++) {
      //why is this created as an object??
      var childItem = {
        parentCmp: {},
        childCmp: {}
      };
      childItem.parentCmp = child.currentEl.A.ext;
      var A2;

      if (children[i]._extitems != undefined) {
        A2 = children[i].node.A;
      } else {
        A2 = children[i].A;
      }

      childItem.childCmp = A2.ext;
      this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
    }
  };

  _proto.addTheChild2 = function addTheChild2(parentCmp, childCmp, location) {
    var parentxtype = parentCmp.xtype;
    var childxtype = childCmp.xtype; //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
    //if (childxtype == 'widget')

    if (this.currentEl.A.ext.initialConfig.align != undefined) {
      if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
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
    } // if (this.parentNode.childrenYetToBeDefined > 0) {
    //     this.parentNode.childrenYetToBeDefined--
    // }
    // //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
    // if (this.parentNode.childrenYetToBeDefined == 0) {
    //     this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
    // }

  };

  _proto.atEnd = function atEnd() {
    //console.log('*** at end');
    //console.log('this - ' + this.currentElName);
    //console.dir(this.currentEl.A);
    if (this.parentEl != null) {//console.log('parent - ' + this.parentElName);
      //console.dir(this.parentEl.A);
    } else {//console.log('No EXT parent');
      }
  };

  _proto.getCurrentElName = function getCurrentElName(component) {
    if (component._extitems != undefined) {
      return component.node.nodeName;
    } else {
      return component.nodeName;
    }
  };

  _proto.sendReadyEvent = function sendReadyEvent(component) {
    var cmp = component.currentEl.A.ext;

    if (component._extitems != undefined) {
      component['ready'].emit({
        detail: {
          cmp: cmp
        }
      });
    } else {
      component.dispatchEvent(new CustomEvent('ready', {
        detail: {
          cmp: cmp
        }
      }));
    }
  } //******* base end */
  //******* props start */
  ;

  _proto.createProps = function createProps(properties, propertiesobject, events, eventnames) {
    var o = {};
    o.xtype = this.currentEl.A.xtype;

    if (o.xtype == 'column' || o.xtype == 'gridcolumn') {
      var renderer = this.getAttribute('renderer');

      if (renderer != undefined) {
        o.cell = this.cell || {};
        o.cell.xtype = 'renderercell'; //console.log(renderer)

        o.cell.renderer = renderer;
      }
    } //mjg fitToParent not working??


    if (true === this.fitToParent) {
      o.top = 0, o.left = 0, o.width = '100%', o.height = '100%';
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i]; //console.log(property)

      if (this.getAttribute(property) !== null) {
        if (property == 'handler') {
          var functionString = this.getAttribute(property); //error check for only 1 dot

          var r = functionString.split('.');
          var obj = r[0];
          var func = r[1];
          o[property] = window[obj][func];
        } else {
          o[property] = this.filterProperty(this.getAttribute(property));
        }
      }
    }

    o.listeners = {}; // this would only add events to the ones that are
    // being used for this instance
    // for (var i = 0; i < this.attributes.length; i++) {
    //     var attr = this.attributes.item(i).nodeName;
    //     if (/^on/.test(attr)) {
    //     //if (/^on/.test(attr) && attr!='onitemdisclosure') {
    //         var name = attr.slice(2);
    //         var result = this.EVENTS.filter(obj => {return obj.name === name});
    //         this.setEvent(result[0],o,this)
    //     }
    // }
    //this.EVENTS

    var me2 = this;
    this.events.forEach(function (eventparameter, index, array) {
      me2.setEvent(eventparameter, o, me2);
    });
    this.currentEl.A.props = o; //return o;
  } //******* props end */
  ;

  _proto.setEvent = function setEvent(eventparameters, o, me3) {
    o.listeners[eventparameters.name] = function () {
      var eventname = eventparameters.name; //console.log('in event: ' + eventname + ' ' + o.xtype)

      var parameters = eventparameters.parameters;
      var parms = parameters.split(',');
      var args = Array.prototype.slice.call(arguments);
      var event = {};

      for (var i = 0, j = parms.length; i < j; i++) {
        event[parms[i]] = args[i];
      }

      me3.dispatchEvent(new CustomEvent(eventname, {
        detail: event
      }));
    };
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attr, oldVal, newVal) {
    if (/^on/.test(attr)) {
      if (newVal) {
        this.addEventListener(attr.slice(2), function (event) {
          var functionString = newVal; // todo: error check for only 1 dot

          var r = functionString.split('.');
          var obj = r[0];
          var func = r[1];

          if (obj && func) {
            window[obj][func](event);
          }
        });
      } else {//delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    } else {
      var ischanged;

      if (this.A) {
        if (this.A.ext != undefined) {
          ischanged = true;
          var method = 'set' + attr[0].toUpperCase() + attr.substring(1);

          if (method != 'setExtname') {
            console.log(method);
            this.A.ext[method](newVal);
          }
        } else {
          ischanged = false;
        }
      } //console.log('attr: ' + attr + ', changed is ' + ischanged)
      //if (this.A.ext === undefined) {
      //    //mjg ??
      //}
      //else {
      //    //mjg check if this method exists for this component
      //    var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
      //    this.A.ext[method](newVal)
      //}

    }
  };

  _proto.extendObject = function extendObject(obj, src) {
    if (obj == undefined) {
      obj = {};
    }

    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }

    return obj;
  };

  _proto.extendArray = function extendArray(obj, src) {
    if (obj == undefined) {
      obj = [];
    }

    Array.prototype.push.apply(obj, src);
    return obj;
  };

  _proto.filterProperty = function filterProperty(propertyValue) {
    try {
      var parsedProp = JSON.parse(propertyValue);

      if (parsedProp === null || parsedProp === undefined || parsedProp === true || parsedProp === false || parsedProp === Object(parsedProp) || !isNaN(parsedProp) && parsedProp !== 0) {
        return parsedProp;
      } else {
        return propertyValue;
      }
    } catch (e) {
      return propertyValue;
    }
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    //console.log('ExtBase disconnectedCallback ' + this.A.ext.xtype)
    delete this.A.ext;
  };

  _createClass(EwcBaseComponent, [{
    key: "currentEl",
    get: function get() {
      if (this._extitems != undefined) {
        return this.node;
      } else {
        return this;
      }
    }
  }, {
    key: "currentElName",
    get: function get() {
      if (this._extitems != undefined) {
        return this.node.nodeName;
      } else {
        return this.nodeName;
      }
    }
  }, {
    key: "isAngular",
    get: function get() {
      if (this._extitems != undefined) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "parentEl",
    get: function get() {
      if (this.isAngular) {
        if (this.parentNode == null) {
          return null;
        }

        return this.parentNode.node;
      } else {
        return this.parentNode;
      }
    }
  }, {
    key: "parentElName",
    get: function get() {
      if (this.isAngular) {
        if (this.parentNode == null) {
          return null;
        }

        return this.parentNode.node.nodeName;
      } else {
        return this.parentNode.nodeName;
      }
    }
  }]);

  return EwcBaseComponent;
}(_wrapNativeSuper(HTMLElement));

export { EwcBaseComponent as default };
EwcBaseComponent.elementcount = 0;
EwcBaseComponent.elements = [];
EwcBaseComponent.elementsprior = [];
EwcBaseComponent.isLoading = false;
EwcBaseComponent.isDone = false;
EwcBaseComponent.count = 0;
EwcBaseComponent.DIRECTION = ''; //EwcBaseComponent.getCmp = function getCmp(event, value) {
//    var array = event.detail.allCmp;
//    for (var i = 0; i < array.length; i++) {
//        if (array[i]['extname'] === value) {
//        return array[i].ext;
//        }
//    }
//    return null;
//};
//EwcBaseComponent.extendArray = function(obj, src) {
//    if (obj == undefined) {obj = []}
//    Array.prototype.push.apply(obj,src);
//    return obj;
//}