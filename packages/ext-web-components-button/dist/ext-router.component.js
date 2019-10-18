import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import EwcBaseComponent from './ewc-base';
export var ExtRouterComponent =
/*#__PURE__*/
function (_EwcBaseComponent) {
  _inheritsLoose(ExtRouterComponent, _EwcBaseComponent);

  _createClass(ExtRouterComponent, [{
    key: "hidden",
    //prettier-ignore
    get: function get() {
      return this.getAttribute("hidden");
    },
    set: function set(hidden) {
      this.setAttribute("hidden", hidden);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = [];
      attrs.push("hidden");
      attrs.push("onready");
      return attrs;
    }
  }]);

  function ExtRouterComponent() {
    var _this;

    _this = _EwcBaseComponent.call(this, {}, [], []) || this;
    _this.router = new Router(window.routes);
    var div = document.createElement("DIV");
    div.setAttribute("id", "route"); //div.style.width = "100%";
    //div.style.height = "100%";

    div.style.width = "400px";
    div.style.height = "400px";
    div.style.padding = _this.padding; //div.style.display = "none";
    //mjg should not be hard coded

    div.style.backgroundSize = "20px 20px"; //div.style.overflow='scroll';

    div.style.borderWidth = "0px";
    div.style.backgroundColor = "#e8e8e8";
    div.style.backgroundImage = "linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0)," + "linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)"; //this.insertAdjacentElement('beforebegin', div);

    _this.appendChild(div);

    console.log('router constructor');
    return _this;
  }

  var _proto = ExtRouterComponent.prototype;

  _proto.createProps = function createProps() {
    this.props = {};
    var div = document.createElement("DIV");
    div.setAttribute("id", "route");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.padding = this.padding;
    div.style.display = "none"; //mjg should not be hard coded

    div.style.backgroundSize = "20px 20px"; //div.style.overflow='scroll';

    div.style.borderWidth = "0px";
    div.style.backgroundColor = "#e8e8e8";
    div.style.backgroundImage = "linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0)," + "linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)";
    var el = Ext.get(div);
    this.props["hidden"] = this["hidden"];
    this.props.listeners = {};
    this.setEvent("onready", this.props, this);
    this.props.xtype = "widget";
    this.props.ewc = "router";
    this.props.element = el;
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attr, oldVal, newVal) {
    var route = document.getElementById("route");

    if (route != null) {
      if (attr == "hidden") {
        if (newVal == "true") {
          route.style.display = "none";
        } else {
          route.style.display = "block";
        }
      }
    } else {//console.log('route null: ' + attr + ' - ' + newVal)
    }

    if (attr == "onready") {
      if (newVal) {
        //mjg check if this event exists for this component
        this.addEventListener(attr.slice(2), function (event) {
          eval(newVal + "(event)");
        });
      } else {//delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    }
  };

  return ExtRouterComponent;
}(EwcBaseComponent);

(function () {
  Ext.onReady(function () {
    window.customElements.define("ext-router", ExtRouterComponent);
  });
})();

export function getRoutes(items) {
  //mjg clean this up
  window._routes = [];

  var routes = _getRoutes(items);

  window._routes = [];
  return routes;
}

function _getRoutes(items) {
  items.forEach(function (item) {
    item.leaf = !item.hasOwnProperty("children");
    item.hash = item.text.replace(/ /g, "");
    item.hashlower = item.hash.toLowerCase();

    if (item.children == undefined) {
      window._routes.push(new Route(item.hash, item.hashlower, item.component, item["default"]));
    } else {
      _getRoutes(item.children);
    }
  });
  return window._routes;
}

export var Route =
/*#__PURE__*/
function () {
  function Route(hash, hashlower, component, defaultRoute) {
    try {
      if (!hash) {
        throw "error: hash param is required";
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
    return hashedPath.replace("#", "") === this.hash;
  };

  return Route;
}();
export var Router =
/*#__PURE__*/
function () {
  function Router(routes) {
    window.router = this;

    try {
      if (!routes) {
        throw "error: routes param is mandatory";
      }

      this.routes = routes;
    } catch (e) {
      console.error(e);
    }
  }

  var _proto3 = Router.prototype;

  _proto3.init = function init() {
    var routes = this.routes;

    (function (scope, routes) {
      window.addEventListener("hashchange", function (e) {
        scope.hasChanged(scope, routes);
      });
    })(this, routes);

    this.hasChanged(this, routes);
  };

  _proto3.hasChanged = function hasChanged(scope, routes) {
    if (window.location.hash.length > 0) {
      var currentHash = "";
      var currentHashLower = "";
      var currentComponent = null;

      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];

        if (route.isActiveRoute(window.location.hash.substr(1))) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      scope.rootElem = document.getElementById("route");
      scope.rootElem.style.display = "block";
      window[currentHashLower] = new currentComponent();
      var componentHtml = currentHash + "Component.html";
      var code = window._code[currentHashLower][componentHtml];
      scope.rootElem.innerHTML = code;
    } else {
      var currentHash = "";
      var currentHashLower = "";
      var currentComponent = null;

      for (var i = 0, length = routes.length; i < length; i++) {
        var route = routes[i];

        if (route["default"] == true) {
          currentHash = route.hash;
          currentHashLower = route.hashlower;
          currentComponent = route.component;
        }
      }

      if (currentHash == "") {//console.log('no default route specified')
      } else {
        scope.rootElem.style.display = "block";
        window[currentHashLower] = new currentComponent();
        var componentHtml = currentHash + "Component.html";
        scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml];
      }
    }
  };

  return Router;
}();