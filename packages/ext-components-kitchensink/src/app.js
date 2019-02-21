import { Route } from './router/route.js';
import './view/main/main.js';

(function () {

  function getItems(items) {
    items.forEach(function(item){
      if (item.children == undefined) {
        if (item.default == undefined) { item.default = false }
        window.routes.push(new Route(item.hash, item.url, item.default))
      }
      else {
        getItems(item.children)
      }
    })
  }

  function init() {
    window.menu = [
      { text: 'Home', navIcon: 'icon-buttons', hash: 'home', url: './src/view/main/main.html', default: true },
      { text: 'About', navIcon: 'icon-buttons', hash: 'about', url: './src/view/about/about.html' },
      { text: 'Components', navIcon: 'icon-buttons', children: [
        { text: 'Buttons', navIcon: 'icon-buttons', children: [
          { text: 'Button',  layout: 'center', navIcon: 'icon-buttons', hash: 'button', url: './src/view/button/button.html' },
          { text: 'SegmentedButton',  layout: 'center', navIcon: 'icon-segmented-buttons', hash: 'segmentedbutton', url: './src/view/segmentedbutton/segmentedbutton.html' },
          { text: 'SplitButton',  layout: 'center', navIcon: 'icon-buttons', hash: 'splitbutton', url: './src/view/splitbutton/splitbutton.html' }
        ]}
      ]}
    ]
    window.routes = [];
    getItems(window.menu);
    console.log(window.routes);
  }
  init();
}());
