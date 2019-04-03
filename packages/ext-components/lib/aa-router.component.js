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
    item.hash = item.text.toLowerCase().replace(/\s/g, '');
    if (item.children == undefined) {
      window._routes.push(new Route(item.hash, item.component, item.default))
    }
    else {
      _getRoutes(item.children)
    }
  })
  return window._routes
}

export class Route {

  constructor (hash, component, defaultRoute) {
    try {
      if(!hash) {
        throw 'error: hash param is required';
      }
    } catch (e) {
      console.error(e);
    }
    this.hash = hash;
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
    try {
      if (!routes) {
        throw 'error: routes param is mandatory';
      }
      this.routes = routes;
      this.rootElem = document.getElementById('route');
      this.init();
    } catch (e) {
      console.error(e);   
    }
  }

  init() {
    var r = this.routes;
    (function(scope, r) { 
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  }

  hasChanged(scope, r) {
    if (window.location.hash.length > 0) {
      var currentHash = ''
      var currentComponent = null
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if(route.isActiveRoute(window.location.hash.substr(1))) {
          currentHash = route.hash
          currentComponent = route.component
        }
      }
      window[currentHash] = new currentComponent()
      //var componentHtml = Object.keys( window._code[currentHash])[0];
      var componentHtml = currentHash + 'component.html'

      scope.rootElem.innerHTML = window._code[currentHash][componentHtml]
    }
    else {
      var currentHash = ''
      var currentComponent = null
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if(route.default == true) {
          currentHash = route.hash
          currentComponent = route.component
        }
      }
      if (currentHash == ''){
        console.log('no default route specified')
      }
      else {
        window[currentHash] = new currentComponent()
        scope.rootElem.innerHTML = window._code[currentHash][currentComponent.name + '.html']  
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
    if (attr == 'hidden') {
      let timerId = setInterval(() => {
        var route = document.getElementById("route");
        if (route != null) {
          clearInterval(timerId);
          if (newVal == 'true') {
            route.style.display = "none"
          }
          else {
            route.style.display = "block"
          }
        }
      }, 50);
    }
    if (attr == 'onready') {
      if (newVal) {
//mjg check if this event exists for this component
        this.addEventListener(attr.slice(2), function() {eval(newVal)});
      } else {
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
      setTimeout(function() { 
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
        setTimeout(function() { 
          new Router(window.routes);
        }, 50);
      }, 50);
    })
  }

  disconnectedCallback() {
    delete this.ext
    //console.log('ExtBase disconnectedCallback')
  }
}
(function () {
window.customElements.define('ext-router', ExtRouterComponent);
})();