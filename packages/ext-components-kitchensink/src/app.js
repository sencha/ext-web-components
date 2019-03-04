import { Route } from '@sencha/ext-components';
import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    window.menu = getMenu();
    window.routes = [];
    getRoutes(window.menu);
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent.html']
  }

  function getRoutes(items) {
    items.forEach(function(item){
      item.leaf = !item.hasOwnProperty('children');
      item.hash = item.text.toLowerCase().replace(/\s/g, '');
      if (item.children == undefined) {
        window.routes.push(new Route(item.hash, item.component, item.default))
      }
      else {
        getRoutes(item.children)
      }
    })
  }

}());
