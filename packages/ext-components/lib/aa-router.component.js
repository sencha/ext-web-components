export class Route {

  constructor (hash, className, url, defaultRoute) {
      try {
        if(!hash || !url) {
          throw 'error: hash and url params are mandatories';
        }
      } catch (e) {
        console.error(e);
      }
    this.hash = hash;
    this.url = url;
    this.className = className;
    this.default = defaultRoute;
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

  hasChanged(scope, r){
      if (window.location.hash.length > 0) {
          for (var i = 0, length = r.length; i < length; i++) {
              var route = r[i];
              if(route.isActiveRoute(window.location.hash.substr(1))) {
                  scope.goToRoute(route.url);
              }
          }
      } else {
          for (var i = 0, length = r.length; i < length; i++) {
              var route = r[i];
              if(route.default) {
                  scope.goToRoute(route.url);
              }
          }
      }
  }

  goToRoute(url) {
    (function(scope) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState === 4 && this.status === 200) {
            scope.rootElem.innerHTML = this.responseText;
          }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    })(this);
  }

}

export default class ExtRouter extends HTMLElement {

  get padding(){return this.getAttribute('padding')};set padding(padding){this.setAttribute('padding',padding)}

  constructor() {
    super()
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

        div.style.backgroundSize='20px 20px';
        div.style.borderWidth='0px';
        div.style.backgroundColor='#e8e8e8';
        div.style.backgroundImage=
        'linear-gradient( 0deg, #f5f5f5 1.1px, transparent 0),' +
        'linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)';

        var el = Ext.get(div);
        var props = {};
        props.xtype = 'widget'
        props.element = el;
        me.ext = Ext.create(props)
        var nodeParentName = me.parentNode.nodeName
        if (nodeParentName.substring(0, 3) == 'EXT') {
          var parentCmp = me.parentNode['ext'];
          var childCmp = me.ext;
          parentCmp.add(childCmp)
          //console.log(`${parentCmp.xtype}.add(${childCmp.xtype})`)
        }
        setTimeout(function() { 
          var router = new Router(window.routes);
        }, 50);
      }, 50);
    })
  }

  disconnectedCallback() {
    delete this.ext
    console.log('ExtBase disconnectedCallback')
  }
}
(function () {
window.customElements.define('ext-router', ExtRouter);
})();