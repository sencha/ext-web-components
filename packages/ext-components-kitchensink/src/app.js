import { Route } from '@sencha/ext-components';
import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    window.examplesRoot = './src/view/'
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent' + '.html']
    window.menu = getMenu();
    window.routes = [];
    getRoutes(window.menu, window.location.hash.substr(1), window.examplesRoot);
  }

  function getRoutes(items, hash, path) {
    items.forEach(function(item){
      item.hash = item.text.toLowerCase().replace(/\s/g, '')
      item.path = path + item.hash + '/';
      if (item.children == undefined) {
        if (item.default == undefined) { item.default = false }
        if(item.hash == hash) {
          window[hash] = new item.component()
          window.initHash = hash
        }
        window.routes.push(new Route(item.hash, item.component, item.path, item.default))
      }
      else {
        getRoutes(item.children, hash, item.path)
      }
    })
  }

}());
