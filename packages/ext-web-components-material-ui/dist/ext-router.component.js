import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import WebComponentsBaseComponent from './common/webcomponentsbase';
import ElementParser from './common/ElementParser.js';
import { //doProp,
//filterProp,
isMenu, isRenderercell, isParentGridAndChildColumn, isTooltip, isPlugin } from './common/util.js';
export var ExtRouter = /*#__PURE__*/function (_WebComponentsBaseCom) {
  _inheritsLoose(ExtRouter, _WebComponentsBaseCom);

  _createClass(ExtRouter, [{
    key: "hidden",
    //prettier-ignore
    get: function get() {
      return this.getAttribute('hidden');
    },
    set: function set(hidden) {
      this.setAttribute('hidden', hidden);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = [];
      attrs.push('hidden');
      attrs.push('onready');
      return attrs;
    }
  }]);

  function ExtRouter() {
    var _this;

    _this = _WebComponentsBaseCom.call(this, [], []) || this;
    _this.router = new Router(window.routes);
    return _this;
  }

  var _proto = ExtRouter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    //WebComponentsBaseComponent.elementcount++;
    //console.log('added: ' + this.tagName + ': elementcount is now ' + WebComponentsBaseComponent.elementcount);
    //WebComponentsBaseComponent.elements.push(this);
    //console.log(WebComponentsBaseComponent.elements)
    this.base = WebComponentsBaseComponent;
  };

  _proto.parsedCallback = function parsedCallback() {
    this.createProps();
  };

  _proto.createProps = function createProps() {
    this.props = {};
    var div = document.createElement('DIV');
    div.setAttribute('id', 'route');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.padding = this.padding;
    div.style.display = 'none'; //mjg should not be hard coded

    div.style.backgroundSize = '20px 20px'; //div.style.overflow='scroll';

    div.style.borderWidth = '0px';
    div.style.backgroundColor = '#e8e8e8';
    div.style.backgroundImage = 'linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0),' + 'linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)';
    var el = Ext.get(div);
    this.props['hidden'] = this['hidden'];
    this.props.listeners = {};
    this.setEvent('onready', this.props, this);
    this.props.xtype = 'widget';
    this.props.ewc = 'router';
    this.props.element = el;
    var me = this;
    me.A = {};
    me.A.CHILDREN = [];
    me.A.ITEMS = [];
    me.A.o = {}; //Ext.onReady(function() {

    me.A.ext = Ext.create(me.props);

    if (me.parentNode.nodeName.substring(0, 4) === 'EXT-') {
      if (me.parentNode.A.ext !== undefined) {
        me.addTheChild(me.parentNode.A.ext, me.A.ext);
      } else {
        me.parentNode.A.CHILDREN.push(me.A.ext);
      }
    } //WebComponentsBaseComponent.elementcount--;
    //console.log('reduced: ' + me.tagName + ' elementcount reduced to ' + WebComponentsBaseComponent.elementcount)
    //});

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

  _proto.attributeChangedCallback = function attributeChangedCallback(attr, oldVal, newVal) {
    var route = document.getElementById('route');

    if (route != null) {
      if (attr == 'hidden') {
        if (newVal == 'true') {
          route.style.display = 'none';
        } else {
          route.style.display = 'block';
        }
      }
    } else {//console.log('route null: ' + attr + ' - ' + newVal)
    }

    if (attr == 'onready') {
      if (newVal) {
        //mjg check if this event exists for this component
        this.addEventListener(attr.slice(2), function (event) {
          eval(newVal + '(event)');
        });
      } else {//delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    }
  };

  return ExtRouter;
}(WebComponentsBaseComponent);
window.customElements.define('ext-router', ElementParser.withParsedCallback(ExtRouter));
export function getRoutes(items) {
  //mjg clean this up
  window._routes = [];

  var routes = _getRoutes(items);

  window._routes = [];
  return routes;
}

function _getRoutes(items) {
  items.forEach(function (item) {
    item.leaf = !item.hasOwnProperty('children');
    item.hash = item.text.replace(/ /g, '');
    item.hashlower = item.hash.toLowerCase();

    if (item.children == undefined) {
      window._routes.push(new Route(item.hash, item.hashlower, item.component, item["default"]));
    } else {
      _getRoutes(item.children);
    }
  });
  return window._routes;
}

export var Route = /*#__PURE__*/function () {
  function Route(hash, hashlower, component, defaultRoute) {
    try {
      if (!hash) {
        throw 'error: hash param is required';
      }
    } catch (e) {
      console.error(e);
    }

    this.hash = hash;
    this.hashlower = hashlower;
    this.component = component;

    if (defaultRoute != undefined) {
      this["default"] = defaultRoute;
    }
  }

  var _proto2 = Route.prototype;

  _proto2.isActiveRoute = function isActiveRoute(hashedPath) {
    return hashedPath.replace('#', '') === this.hash;
  };

  return Route;
}();
export var Router = /*#__PURE__*/function () {
  function Router(routes) {
    window.router = this;

    try {
      if (!routes) {
        throw 'error: routes param is mandatory';
      }

      this.routes = routes;
    } catch (e) {
      console.error(e);
    }
  }

  var _proto3 = Router.prototype;

  _proto3.routeMe = function routeMe() {
    //console.log('routeMe')
    this.hasChanged(this, this.routes);
  };

  _proto3.init = function init() {//var routes = this.routes;
    //(function(scope, routes) {
    // window.addEventListener('hashchange', function(e) {
    //     //console.log('hashChange')
    //     scope.hasChanged(scope, routes);
    // });
    //})(this, routes);
    //this.hasChanged(this, routes);
  };

  _proto3.hasChanged = function hasChanged(scope, routes) {
    //console.log('hasChanged: ' + window.location.hash);
    var currentHash = '';
    var currentHashLower = '';
    var currentComponent = null;
    var i;
    var route;

    if (window.location.hash.length > 0) {
      for (i = 0; i < routes.length; i++) {
        route = routes[i];

        if (route.isActiveRoute(window.location.hash.substr(1))) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      var componentHtml;
      var code;
      scope.rootElem = document.getElementById('route');

      if (scope.rootElem == null) {
        setTimeout(function () {
          scope.rootElem = document.getElementById('route');
          scope.rootElem.style.display = 'block';
          window[currentHashLower] = new currentComponent();
          componentHtml = currentHash + 'Component.html';
          code = window._code[currentHashLower][componentHtml];
          scope.rootElem.innerHTML = code;
        }, 0);
      } else {
        //scope.rootElem = document.getElementById('route');
        scope.rootElem.style.display = 'block';
        window[currentHashLower] = new currentComponent();
        componentHtml = currentHash + 'Component.html';
        code = window._code[currentHashLower][componentHtml];
        scope.rootElem.innerHTML = code;
      }
    } else {
      //var currentHash = '';
      //var currentHashLower = '';
      //var currentComponent = null;
      for (i = 0; i < routes.length; i++) {
        route = routes[i];

        if (route["default"] == true) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      if (currentHash == '') {//console.log('no default route specified')
      } else {
        //console.log(scope)
        console.log('the else');
        scope.rootElem = document.getElementById('route'); //mjg

        scope.rootElem.style.display = 'block';
        window[currentHashLower] = new currentComponent();
        componentHtml = currentHash + 'Component.html'; //scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml];
      }
    }
  };

  return Router;
}();