import {
  ExtPanel,
  ExtTitlebar,
  ExtToolbar,
  ExtTreelist,
  ExtContainer,
  ExtGrid,
  ExtColumn,
  ExtButton,
  ExtSpacer,
  ExtRouter
} from '@sencha/ext-components';

import { Route } from '@sencha/ext-components';

import main      from './view/main/main.js';
import about     from './view/about/about.js';
import home      from './view/home/home.js';
import button    from './view/components/buttons/button/button.js';
import basicgrid from './view/grids/corefeatures/basicgrid/basicgrid.js';

(function () {

  init();

  function init() {
    window.main = new main()
    window.menu = setMenu();
    window.routes = [];
    getItems(window.menu, window.location.hash.substr(1));
  }

  function getItems(items, hash) {
    items.forEach(function(item){
      if (item.children == undefined) {
        if (item.default == undefined) { item.default = false }
        if(item.hash == hash) {
          window[hash] = new item.className()
          window.initHash = hash
        }
        window.routes.push(new Route(item.hash, item.url, item.default))
      }
      else {
        getItems(item.children, hash)
      }
    })
  }

  function setMenu() {
    var r = './src/view/'
    return [
      { text: 'Home', className: home, navIcon: 'icon-buttons', hash: 'home', url: r+'home/home.html', default: true },
      { text: 'About', className: about, navIcon: 'icon-buttons', hash: 'about', url: r+'about/about.html' },
      { text: 'Components', navIcon: 'icon-buttons', children: [
        { text: 'Buttons', navIcon: 'icon-buttons', children: [
          { text: 'Button', className: button, navIcon: 'icon-buttons', hash: 'button', url: r+'components/buttons/button/button.html' },
          { text: 'SegmentedButton', navIcon: 'icon-segmented-buttons', hash: 'segmentedbutton', url: r+'components/buttons/segmentedbutton/segmentedbutton.html' },
          { text: 'SplitButton', navIcon: 'icon-buttons', hash: 'splitbutton', url: r+'components/buttons/splitbutton/splitbutton.html' }
        ]
      }
      ]},
      {text:'Grids', navIcon: 'icon-grids', children: [
        {text:'Core Features', navIcon: 'icon-grids', hash: 'button', children: [
          {text:'Basic Grid', className: basicgrid,   hash:'basicgrid',   url:r+'grids/corefeatures/basicgrid/basicgrid.html',      navIcon:'icon-grids'},
          {text:'Grouped Grid', hash:'groupedgrid', url:r+'grids/corefeatures/groupedgrid/groupedgrid.html',  navIcon:'icon-grouped-grid'},
          {text:'Locked Grid',  hash:'lockedgrid',  url:r+'grids/corefeatures/lockedrid/lockedgrid.html',     navIcon:'icon-locking-grid'},
          {text:'Editable Grid',hash:'editablegrid',url:r+'grids/corefeatures/editablegrid/editablegrid.html',navIcon:'icon-editable-grid'},
          {text:'XML Grid',     hash:'xmlgrid',     url:r+'grids/corefeatures/xmlgrid/xmlgrid.html',          navIcon:'icon-xml-grid'}
        ]}
      ]}
    ]
  }

}());
