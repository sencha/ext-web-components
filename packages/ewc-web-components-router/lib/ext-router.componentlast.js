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
    this.rootElem = document.getElementById('route');
    console.log(this.rootElem)
    var routes = this.routes;
    (function(scope, routes) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, routes);
      });
    })(this, routes);
    this.hasChanged(this, routes);
  }

  hasChanged(scope, routes) {
      console.log('hasChanged: ')
      console.dir(scope)

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
      //console.dir(scope)
      console.dir(document)
      var r = document.getElementById("route")
      console.dir(r)
      //scope.rootElem.style.display = "block"
      route.style.display = "block"
      window[currentHashLower] = new currentComponent()
      var componentHtml = currentHash + 'Component.html'
      //scope.rootElem.innerHTML = window._code[currentHashLower][componentHtml]
      route.innerHTML = window._code[currentHashLower][componentHtml]
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
    //console.log('constructor')
  }

  static get observedAttributes() {
    var attrs = []
    attrs.push('hidden')
    attrs.push('onready')
    return attrs
  }

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
      this.dispatchEvent(new CustomEvent(eventname,{detail: event}))
    }
  }

    connectedCallback() {
        console.log('connectedCallback: router')



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
        var props = {};
        props['hidden'] =  this['hidden']
        props.listeners = {}
        this.setEvent('onready',props,this)
        props.xtype = 'widget'
        props.element = el;

        this.ext = Ext.create(props)
        this.router = new Router(window.routes);

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
    console.log('children: ' + this.children.length)
    console.log('parentEWS: ' + parentEWS)
    console.log('parentCONNECTED: ' + parentCONNECTED)
    console.log('EWSCHILDRENCOUNT: ' + this.EWSCHILDRENCOUNT)
    console.log('parent EWSCHILDRENCOUNT: ' + this.parentNode.EWSCHILDRENCOUNT)
    console.log('EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)

    if (this.EWSCHILDRENCOUNT == 0) {
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
    }

    //if (this.EWSCHILDREN == 0) {
    if (this.EWSCHILDREN == undefined) {
        if (this.EWSCHILDRENCOUNT != 0) {
            console.log('no children defined yet')
        }
    }
    else {
        console.log('EWSCHILDREN.length: ' + this.EWSCHILDREN.length)
    }

    if (parentEWS == true) {
        if (this.parentNode.EWSCHILDREN == undefined) {
            this.parentNode.EWSCHILDREN = []
        }
        this.parentNode.EWSCHILDREN.push(this)
        this.parentNode.EWSCHILDRENLEFT--
        if (this.parentNode.EWSCHILDRENLEFT == 0) {
            console.log('\nTOP to BOTTOM\n\n')
            console.log('this is the last child')
            console.log('ready to go')
            console.dir(this.parentNode)

            var children = this.parentNode.children
            var child = this.parentNode
            this.addChildren(child, children)
            this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))

        }
        else {
            console.log('after EWSCHILDRENLEFT: ' + this.EWSCHILDRENLEFT)
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