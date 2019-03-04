import { Route } from '@sencha/ext-components';
import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    //window.examplesRoot = './src/view/'
    window.menu = getMenu();
    window.routes = [];
    console.log('window.menu')
    console.dir(window.menu)
    //getRoutes(window.menu, window.location.hash.substr(1), window.examplesRoot);
    getRoutes(window.menu);
    console.log('window.routes')
    console.dir(window.routes)
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent.html']
  }

  function getRoutes(items) {
    items.forEach(function(item){
      item.leaf = !item.hasOwnProperty('children');
      item.hash = item.text.toLowerCase().replace(/\s/g, '');
      //item.id = item.hash;
      if (item.children == undefined) {
        window.routes.push(new Route(item.hash, item.component, item.default))
      }
      else {
        getRoutes(item.children)
      }
    })
  }

}());
