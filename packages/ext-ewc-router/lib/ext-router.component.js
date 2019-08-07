export function getRoutes(items) {
  //mjg clean this up
  window._routes = []
  var routes = _getRoutes(items)
  window._routes = []
  return routes
}

function _getRoutes(items) {
  items.forEach(function(item){
    item.leaf = !item.hasOwnProperty('children');
    item.hash = item.text.replace(/\s/g, '');
    item.hashlower = item.hash.toLowerCase();
    if (item.children == undefined) {
      window._routes.push(new Route(item.hash, item.hashlower, item.component, item.default))
    }
    else {
      _getRoutes(item.children)
    }
  })
  return window._routes
}

export class Route {

  constructor (hash, hashlower, component, defaultRoute) {
    try {
      if(!hash) {
        throw 'error: hash param is required';
      }
    } catch (e) {
      console.error(e);
    }
    this.hash = hash;
    this.hashlower = hashlower;
    this.component = component;
    if (defaultRoute != undefined) {
      this.default = defaultRoute;
    }
  }

  isActiveRoute (hashedPath) {
    return hashedPath.replace('#', '') === this.hash;
  }

}

export class Router {

  constructor(routes) {
    window.router = this
    try {
      if (!routes) {
        throw 'error: routes param is mandatory';
      }
      this.routes = routes;
    } catch (e) {
      console.error(e);
    }
  }

  init() {
      console.log('init')
      //this.rootElem = document.getElementById('route');
    //this.rootElem = document.getElementById('route');
    //this.rootElem = document.getElementsByClassName('route')[0];
    //console.log(this.rootElem)
    var routes = this.routes;
    (function(scope, routes) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, routes);
      });
    })(this, routes);
    this.hasChanged(this, routes);
  }

  hasChanged(scope, routes) {
      console.log('hasChanged')
    if (window.location.hash.length > 0) {
      var currentHash = ''
      var currentHashLower = ''
      var currentComponent = null
      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];
        if(route.isActiveRoute(window.location.hash.substr(1))) {
          currentHash = route.hash
          currentHashLower = route.hashlower
          currentComponent = route.component
        }
      }
      scope.rootElem = document.getElementById('route');
      scope.rootElem.style.display = "block"
      window[currentHashLower] = new currentComponent()
      var componentHtml = currentHash + 'Component.html'
      var code = window._code[currentHashLower][componentHtml]
      scope.rootElem.innerHTML = code
    }
    else {
      var currentHash = ''
      var currentHashLower = ''
      var currentComponent = null
      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];
        if(route.default == true) {
          currentHash = route.hash
          currentHashLower = route.hashlower
          currentComponent = route.component
        }
      }
      if (currentHash == ''){
        //console.log('no default route specified')
      }
      else {
        scope.rootElem.style.display = "block"
        window[currentHashLower] = new currentComponent()
        var componentHtml = currentHash + 'Component.html'
        scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml]
      }
    }
  }

}

import {base} from './base';

export class ExtRouterComponent extends base {

//  get padding(){return this.getAttribute('padding')};set padding(padding){this.setAttribute('padding',padding)}
  get hidden(){return this.getAttribute('hidden')};set hidden(hidden){this.setAttribute('hidden',hidden)}

  static get observedAttributes() {
    var attrs = []
    attrs.push('hidden')
    attrs.push('onready')
    return attrs
  }


  constructor() {
    super()
    console.log('constructor')
    this.router = new Router(window.routes);

  }


//   extendObject(obj, src) {
//     if (obj == undefined) {obj = {}}
//     for (var key in src) {
//         if (src.hasOwnProperty(key)) obj[key] = src[key];
//     }
//     return obj;
// }

// extendArray(obj, src) {
//     if (obj == undefined) {obj = []}
//     Array.prototype.push.apply(obj,src);
//     return obj;
// }

// filterProperty(propertyValue) {
//     try {
//         const parsedProp = JSON.parse(propertyValue);

//         if (parsedProp === null ||
//             parsedProp === undefined ||
//             parsedProp === true ||
//             parsedProp === false ||
//             parsedProp === Object(parsedProp) ||
//             (!isNaN(parsedProp) && parsedProp !== 0)
//         ) {
//             return parsedProp;
//         } else {
//             return propertyValue;
//         }
//     }
//     catch(e) {
//         return propertyValue;
//     }
// }


  createProps() {
    this.props = {};


        // var r = document.getElementById('route')
        // console.log(r)

        //var theRoute = document.getElementsByClassName("route")[0];
        //console.log(theRoute)

        var div = document.createElement("DIV");
        //div.classList.add('route');
        div.setAttribute("id", "route");
        div.style.width="100%";
        div.style.height="100%";
        div.style.padding=this.padding;
        div.style.display = 'none'
    //mjg should not be hard coded
        div.style.backgroundSize='20px 20px';
        div.style.overflow='scroll';
        div.style.borderWidth='0px';
        div.style.backgroundColor='#e8e8e8';
        div.style.backgroundImage=
        'linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0),' +
        'linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)';
        var el = Ext.get(div);
 //       var props = {};
        this.props['hidden'] =  this['hidden']
        this.props.listeners = {}
        this.setEvent('onready',this.props,this)
        this.props.xtype = 'widget'
        this.props.ewc = 'router'
        this.props.element = el;
}

// addChildren(child, children) {
//     var childItems = []
//     var childItem = {}
//     for (var i = children.length-1; i > -1; i--) {
//         var item = children[i]
//         if (item.nodeName.substring(0, 4) == 'EXT-') {
//             childItem = {}
//             childItem.parentCmp = child.ext
//             childItem.childCmp = item.ext
//             childItems.push(childItem)
//         }
//         else {
//             childItem = {}
//             childItem.parentCmp = child.ext
//             childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
//             childItems.push(childItem)
//         }
//     }
//     for (var i = childItems.length-1; i > -1; i--) {
//         var childItem = childItems[i]
//         this.addTheChild(childItem.parentCmp, childItem.childCmp)
//     }
// }

connectedCallback() {
    super.connectedCallback()
    return
    // console.log('Base connectedCallback ' + this.XTYPE)

    // console.log('connectedCallback for ' + this.XTYPE + '')
    // console.log(this.parentNode)
    // console.dir(this)
    this.createProps()

    // if (this.parentNode == undefined) {
    //     console.log('parent is undefined for: ' + this.nodeName)
    //     this.props.renderTo = document.getElementById('route')
    //     this.doCreate()
    // }


    if (this.parentNode.nodeName == 'APP-ROOT' ||
        this.parentElement.id == 'root'||
        this.parentNode.nodeName == 'BODY'
    ){
        //console.log('*******application at the root')
        var me = this
        me.doCreate()
        console.log('Ext.application for ' + me.props.xtype + '(' + me.props.ewc + ')')

        Ext.application({
            name: 'MyEWCApp',
            launch: function () {
                Ext.Viewport.add([me.ext])
                //if (window.router) {window.router.init();}
            }
        });
    }
    else if (this.parentNode.nodeName.substring(0, 4) != 'EXT-') {
        // console.log('parent of: ' + this.nodeName)
        // console.log(this.parentNode.nodeName)
        this.props.renderTo = this
        this.doCreate()
    }
    else {
        // console.log('parent is EXT')
        this.doCreate()
    }

    var parentEWS = false
    var parentCONNECTED = false
    this.CONNECTED = true
    this.EWSCHILDRENCOUNT = 0

    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].nodeName.substring(0, 4) == 'EXT-') {
            this.EWSCHILDRENCOUNT++
        }
    }
    this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT
    if (this.EWSCHILDREN != undefined) {
        this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT - this.EWSCHILDREN.length
    }

    if (this.parentNode.nodeName.substring(0, 4) == 'EXT-') {
        parentEWS = true
        if (this.parentNode.CONNECTED == true) {
            parentCONNECTED = true
        }
    }
    // console.log('children: ' + this.children.length)
    // console.log('parentEWS: ' + parentEWS)
    // console.log('parentCONNECTED: ' + parentCONNECTED)
    // console.log('EWSCHILDRENCOUNT: ' + this.EWSCHILDRENCOUNT)
    // console.log('parent EWSCHILDRENCOUNT: ' + this.parentNode.EWSCHILDRENCOUNT)
     console.log('EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)

    if (this.EWSCHILDRENCOUNT == 0) {
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
    }

    //if (this.EWSCHILDREN == 0) {
    if (this.EWSCHILDREN == undefined) {
        if (this.EWSCHILDRENCOUNT != 0) {
            // console.log('no children defined yet')
        }
    }
    else {
        // console.log('EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }

    if (parentEWS == true) {
        if (this.parentNode.EWSCHILDREN == undefined) {
            this.parentNode.EWSCHILDREN = []
        }
        this.parentNode.EWSCHILDREN.push(this)
        this.parentNode.EWSCHILDRENLEFT--
        if (this.parentNode.EWSCHILDRENLEFT == 0) {
            // console.log('TOP to BOTTOM')
            // console.log('this is the last child')
            // console.log('ready to go')
            // console.dir(this.parentNode)
            // console.dir(this.parentNode.children)
            // console.dir(this.parentNode.EWSCHILDREN)

            var children = this.parentNode.children
            var child = this.parentNode
            this.addChildren(child, children)
            this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
        }
        else {
            // console.log('after EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)
        }
    }

    if(this.EWSCHILDREN == undefined) {this.EWSCHILDREN = []}
    if(this.EWSCHILDRENCOUNT > 0 && this.EWSCHILDRENCOUNT == this.EWSCHILDREN.length) {
        // console.log('BOTTOM to TOP')
        // console.log('children were done first')
        // console.log('ready to go')
        // console.log(this.children)
        // console.log(this.EWSCHILDREN)
        var children = this.children
        var child = this
         console.dir(this.children)
        // console.dir(child)

        this.addChildren(child, children)
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))

        console.log(this.parentNode.EWSCHILDRENLEFT)




    }
    else {
        //console.log('after EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }
}

//     connectedCallback2() {
//         console.log('connectedCallback: router')
//         this.createProps()



//         this.ext = Ext.create(props)
//         this.router = new Router(window.routes);
//         this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
//         console.log('after ready')

//         var me = this;
//         setTimeout(function(){
//             //alert("Hello");
//             me.router = new Router(window.routes);
//         }, 10);

//         //this.router = new Router(window.routes);
//         return

//       var parentEWS = false
//       var parentCONNECTED = false
//       this.CONNECTED = true
//       this.EWSCHILDRENCOUNT = 0

//       for (var i = 0; i < this.children.length; i++) {
//         if (this.children[i].nodeName.substring(0, 4) == 'EXT-') {
//             this.EWSCHILDRENCOUNT++
//         }
//     }
//     this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT
//     if (this.EWSCHILDREN != undefined) {
//         this.EWSCHILDRENLEFT = this.EWSCHILDRENCOUNT - this.EWSCHILDREN.length
//     }

//       if (this.parentNode.nodeName.substring(0, 4) == 'EXT-') {
//         parentEWS = true
//         if (this.parentNode.CONNECTED == true) {
//             parentCONNECTED = true
//         }
//     }
//     console.log('children: ' + this.children.length)
//     console.log('parentEWS: ' + parentEWS)
//     console.log('parentCONNECTED: ' + parentCONNECTED)
//     console.log('EWSCHILDRENCOUNT: ' + this.EWSCHILDRENCOUNT)
//     console.log('parent EWSCHILDRENCOUNT: ' + this.parentNode.EWSCHILDRENCOUNT)
//     console.log('EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)

//     if (this.EWSCHILDRENCOUNT == 0) {
//         this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
//     }

//     //if (this.EWSCHILDREN == 0) {
//     if (this.EWSCHILDREN == undefined) {
//         if (this.EWSCHILDRENCOUNT != 0) {
//             console.log('no children defined yet')
//         }
//     }
//     else {
//         console.log('EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
//     }

//     if (parentEWS == true) {
//         if (this.parentNode.EWSCHILDREN == undefined) {
//             this.parentNode.EWSCHILDREN = []
//         }
//         this.parentNode.EWSCHILDREN.push(this)
//         this.parentNode.EWSCHILDRENLEFT--
//         if (this.parentNode.EWSCHILDRENLEFT == 0) {
//             console.log('\nTOP to BOTTOM\n\n')
//             console.log('this is the last child')
//             console.log('ready to go')
//             console.dir(this.parentNode)

//             var children = this.parentNode.children
//             var child = this.parentNode
//             this.addChildren(child, children)
//             this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))

//         }
//         else {
//             console.log('after EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)
//         }


//     }
//     //this.router = new Router(window.routes);

//     //   this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
//     //   var nodeParentName = this.parentNode.nodeName
//     //   if (nodeParentNathis.substring(0, 3) == 'EXT') {
//     //     var parentCmp = this.parentNode['ext'];
//     //     var childCmp = this.ext;
//     //     parentCmp.add(childCmp)
//     //   }
//     //  this.router = new Router(window.routes);
//     //})
//   }

//   doCreate() {
//     this.ext = Ext.create(this.props)
//     console.log('Ext.create(' + this.ext.xtype + '(' + this.props.ewc + '), ' + this.props.renderTo + ')')


//     //console.log('Ext.create(' + this.ext.xtype + ')')
//     //console.dir(this.props)
//     //console.dir(this.ext)

//     if (this.parentNode.childrenCounter != undefined) {
//         this.parentNode.childrenCounter--
//         if (this.parentNode.childrenCounter == 0) {
//         //console.log(`ready event for this.parentNode.nodeName}`)
//         //this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
//         }
//     }
// }

// addTheChild(parentCmp, childCmp, location) {
//     var parentxtype = parentCmp.xtype
//     var childxtype = childCmp.xtype
//     console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ewc + ')' + ' - ' + childxtype + '(' + childCmp.ewc + ')')
//     if (childxtype == 'widget')
//     if (this.ext.initialConfig.align != undefined) {
//         if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
//         console.error('Can only use align property if parent is a Titlebar or Grid or Button')
//         return
//         }
//     }
//     var defaultparent = false
//     var defaultchild = false

//     switch(parentxtype) {
//         case 'button':
//             switch(childxtype) {
//                 case 'menu':
//                     parentCmp.setMenu(childCmp)
//                     break;
//                 default:
//                     defaultparent = true
//                     break;
//             }
//             break;
//         case 'gridcolumn':
//         case 'column':
//         case 'treecolumn':
//         case 'textcolumn':
//         case 'checkcolumn':
//         case 'datecolumn':
//         case 'rownumberer':
//         case 'numbercolumn':
//         case 'booleancolumn':
//             switch(childxtype) {
//                 case 'renderercell':
//                     parentCmp.setCell(childCmp)
//                     break;
//                 case 'column':
//                 case 'gridcolumn':
//                     parentCmp.add(childCmp)
//                     break;
//                 default:
//                     defaultparent = true
//                     break;
//             }
//             break;
//         case 'grid':
//         case 'lockedgrid':
//             switch(childxtype) {
//                 case 'gridcolumn':
//                 case 'column':
//                 case 'treecolumn':
//                 case 'textcolumn':
//                 case 'checkcolumn':
//                 case 'datecolumn':
//                 case 'rownumberer':
//                 case 'numbercolumn':
//                 case 'booleancolumn':
//                     if (location == null) {
//                         if (parentxtype == 'grid') {
//                             parentCmp.addColumn(childCmp)
//                         }
//                         else {
//                             parentCmp.add(childCmp)
//                         }
//                     }
//                     else {
//                         var regCols = 0;
//                         if(parentCmp.registeredColumns != undefined) {
//                             regCols = parentCmp.registeredColumns.length;
//                         }
//                         if (parentxtype == 'grid') {
//                             parentCmp.insertColumn(location + regCols, childCmp)
//                         }
//                         else {
//                             parentCmp.insert(location + regCols, childCmp)
//                         }
//                     }
//                     break;
//                 default:
//                     defaultparent = true
//                     break;
//             }
//             break;
//         default:
//             defaultparent = true
//             break;
//     };

//     switch(childxtype) {
//         case 'toolbar':
//         case 'titlebar':
//             if (parentCmp.getHideHeaders != undefined) {
//                 if (parentCmp.getHideHeaders() === false) {
//                     parentCmp.insert(1, childCmp);
//                 }
//                 else {
//                     parentCmp.add(childCmp);
//                 }
//             }
//             else {
//                 if (parentCmp.add != undefined) {
//                     if(location == null) {
//                         parentCmp.add(childCmp)
//                     }
//                     else {
//                         parentCmp.insert(location, childCmp)
//                     }
//                 }
//                 else {
//                     parentCmp.add(childCmp);
//                 }
//             }
//             break;
//         case 'tooltip':
//             parentCmp.setTooltip(childCmp)
//             break;
//         case 'plugin':
//             parentCmp.setPlugin(childCmp)
//             break;
//         default:
//             defaultchild = true
//             break;
//     }

//     if (defaultparent == true && defaultchild == true) {
//         //console.log(parentxtype + '.add(' + childxtype + ')')
//         parentCmp.add(childCmp)
//     }

//     if (this.parentNode.childrenYetToBeDefined > 0) {
//         this.parentNode.childrenYetToBeDefined--
//     }
//     //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
//     if (this.parentNode.childrenYetToBeDefined == 0) {
//         this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
//     }
// }

// setEvent(eventparameters,o,me) {
//     o.listeners[eventparameters.name] = function() {
//       let eventname = eventparameters.name
//       let parameters = eventparameters.parameters;
//       let parms = parameters.split(',');
//       let args = Array.prototype.slice.call(arguments);
//       let event = {};
//       for (let i = 0, j = parms.length; i < j; i++ ) {
//         event[parms[i]] = args[i];
//       }
//       this.dispatchEvent(new CustomEvent(eventname,{detail: event}))
//     }
//   }


  attributeChangedCallback(attr, oldVal, newVal) {
    var route = document.getElementById("route");
    //var route = document.getElementsByClassName('route')[0];
    if (route != null) {
      if (attr == 'hidden') {
        if (newVal == 'true') {
          route.style.display = "none"
        }
        else {
          route.style.display = "block"
        }
      }
    }
    else {
      //console.log('route null: ' + attr + ' - ' + newVal)
    }

    if (attr == 'onready') {
      if (newVal) {
        //mjg check if this event exists for this component
        this.addEventListener(attr.slice(2), function(event) {
          eval(newVal + '(event)')
        });
      }
      else {
        //delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    }
  }


  disconnectedCallback() {
    console.log('disconnectedCallback: router')
    // if(Ext.Element.cache.hasOwnProperty('route')){
    //     Ext.Element.cache['route'].destroy();
    // }

    //var domElement = Ext.get(domId);



    delete this.ext
    // var elem = document.getElementById('route');
    // elem.parentNode.removeChild(elem);

    // delete this
  }
}
(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-router', ExtRouterComponent);
    });
})();