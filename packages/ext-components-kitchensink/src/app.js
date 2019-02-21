import { Route } from './router/route.js';
import './view/main/main.js';
import './view/home/home.js';
import './view/components/buttons/button/button.js';

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
    var r = './src/view/'
    window.menu = [
      { text: 'Home', navIcon: 'icon-buttons', hash: 'home', url: r+'home/home.html', default: true },
      { text: 'About', navIcon: 'icon-buttons', hash: 'about', url: r+'about/about.html' },
      { text: 'Components', navIcon: 'icon-buttons', children: [
        { text: 'Buttons', navIcon: 'icon-buttons', children: [
          { text: 'Button',  layout: 'center', navIcon: 'icon-buttons', hash: 'button', url: r+'components/buttons/button/button.html' },
          { text: 'SegmentedButton', navIcon: 'icon-segmented-buttons', hash: 'segmentedbutton', url: r+'components/buttons/segmentedbutton/segmentedbutton.html' },
          { text: 'SplitButton', navIcon: 'icon-buttons', hash: 'splitbutton', url: r+'components/buttons/splitbutton/splitbutton.html' }
        ]}
      ]},
      {text:'Grids', navIcon: 'icon-grids', children: [
        {text:'Core Features', navIcon: 'icon-grids', hash: 'button', children: [
          {text:'Basic Grid',   hash:'basicgrid',   url:r+'components/grids/corefeatures/basicgrid/basicgrid.html',      navIcon:'icon-grids'},
          {text:'Grouped Grid', hash:'groupedgrid', url:r+'components/grids/corefeatures/groupedgrid/groupedgrid.html',  navIcon:'icon-grouped-grid'},
          {text:'Locked Grid',  hash:'lockedgrid',  url:r+'components/grids/corefeatures/lockedrid/lockedgrid.html',     navIcon:'icon-locking-grid'},
          {text:'Editable Grid',hash:'editablegrid',url:r+'components/grids/corefeatures/editablegrid/editablegrid.html',navIcon:'icon-editable-grid'},
          {text:'XML Grid',     hash:'xmlgrid',     url:r+'components/grids/corefeatures/xmlgrid/xmlgrid.html',          navIcon:'icon-xml-grid'}
        ]}
      ]}
    ]
    window.routes = [];
    getItems(window.menu);
  }
  init();
}());
