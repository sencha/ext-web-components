import { Route } from '@sencha/ext-components';
import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    window.examplesRoot = './src/view/'
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent.html']
    window.menu = getMenu();
    window.routes = [];
    console.log('window.menu')
    console.dir(window.menu)
    getRoutes(window.menu, window.location.hash.substr(1), window.examplesRoot);
    console.log('window.routes')
    console.dir(window.routes)

  }

  function getRoutes(items, hash, path) {
    items.forEach(function(item){
      item.hash = item.text.toLowerCase().replace(/\s/g, '')
      item.path = path + item.hash + '/';
      if (item.children == undefined) {
        if (item.default == undefined) { item.default = false }
        window.routes.push(new Route(item.hash, item.component, item.path, item.default))
      }
      else {
        getRoutes(item.children, hash, item.path)
      }
    })
  }

}());
