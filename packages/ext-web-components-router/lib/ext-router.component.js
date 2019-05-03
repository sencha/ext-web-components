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
    this.rootElem = document.getElementById('route');
    var routes = this.routes;
    (function(scope, routes) { 
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, routes);
      });
    })(this, routes);
    this.hasChanged(this, routes);
  }

  hasChanged(scope, routes) {
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
      scope.rootElem.style.display = "block"
      window[currentHashLower] = new currentComponent()
      var componentHtml = currentHash + 'Component.html'
      scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml]
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

export class ExtRouterComponent extends HTMLElement {

  get padding(){return this.getAttribute('padding')};set padding(padding){this.setAttribute('padding',padding)}
  get hidden(){return this.getAttribute('hidden')};set hidden(hidden){this.setAttribute('hidden',hidden)}

  constructor() {
    super()
  }

  static get observedAttributes() {
    var attrs = []
    attrs.push('hidden')
    attrs.push('onready')
    return attrs
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    var route = document.getElementById("route");
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

  setEvent(eventparameters,o,me) {
    o.listeners[eventparameters.name] = function() {
      let eventname = eventparameters.name
      let parameters = eventparameters.parameters;
      let parms = parameters.split(',');
      let args = Array.prototype.slice.call(arguments);
      let event = {};
      for (let i = 0, j = parms.length; i < j; i++ ) {
        event[parms[i]] = args[i];
      }
      me.dispatchEvent(new CustomEvent(eventname,{detail: event}))
    }
  }

  connectedCallback() {
    var me = this;
    Ext.onReady(function(){
      var div = document.createElement("DIV");
      div.setAttribute("id", "route");
      div.style.width="100%";
      div.style.height="100%";
      div.style.padding=me.padding;
      div.style.display = 'none'
//mjg should not be hard coded
      div.style.backgroundSize='20px 20px';
      div.style.borderWidth='0px';
      div.style.backgroundColor='#e8e8e8';
      div.style.backgroundImage=
      'linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0),' +
      'linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)';

      var el = Ext.get(div);
      var props = {};

      props['hidden'] =  me['hidden']
      props.listeners = {}

      me.setEvent('onready',props,me)

      props.xtype = 'widget'
      props.element = el;
      me.ext = Ext.create(props)
      me.dispatchEvent(new CustomEvent('ready',{detail:{cmp: me.ext}}))
      var nodeParentName = me.parentNode.nodeName
      if (nodeParentName.substring(0, 3) == 'EXT') {
        var parentCmp = me.parentNode['ext'];
        var childCmp = me.ext;
        parentCmp.add(childCmp)
      }
      me.router = new Router(window.routes);
    })
  }

  disconnectedCallback() {
    delete this.ext
  }
}
(function () {
window.customElements.define('ext-router', ExtRouterComponent);
})();