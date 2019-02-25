import {
  ExtPanel,
  ExtSearchfield,
  ExtTabpanel,
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
import getMenu from './menu';

import MainComponent      from './view/main/MainComponent.js';
import AboutComponent     from './view/about/AboutComponent.js';
import HomeComponent      from './view/home/HomeComponent.js';
import ButtonComponent    from './view/components/buttons/button/ButtonComponent.js';
import BasicgridComponent from './view/grids/corefeatures/basicgrid/BasicgridComponent.js';

(function () {

  init();

  function init() {

    var url = './src/view/main/MainComponent.html';
    window.main = new MainComponent()

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        window.examplesRoot = './src/view/'
        //window.menu = setMenu();

        window.menu = getMenu();

        // window.menu2 = getMenu2();
        // var s = ''
        // window.menu2.forEach(function(item, index, arr) {
        //   console.log((index + 1) + ': ' + arr[index].component)
        //   s = s + 'class ' + arr[index].component + ' {}' + '\n'
        // })
        // console.log(s)

        window.routes = [];
        getItems(window.menu, window.location.hash.substr(1), window.examplesRoot);

        var me = this
        //simulate delay with reads
        //setTimeout(function() { 
        document.body.innerHTML = me.responseText;
        //}, 2000);
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }

  function getItems(items, hash, path) {
    items.forEach(function(item){
      item.hash = item.text.toLowerCase().replace(/\s/g, '')
      item.path = path + item.hash + '/';
      //console.log(item.path)
      if (item.children == undefined) {
        if (item.default == undefined) { item.default = false }
        if(item.hash == hash) {
          window[hash] = new item.component()
          window.initHash = hash
        }
        window.routes.push(new Route(item.hash, item.component, item.path, item.default))
      }
      else {
        getItems(item.children, hash, item.path)
      }
    })
  }

  function setMenu() {
    var r = window.examplesRoot
    //var r = './src/view/'
    return [
      { text: 'Home', component: HomeComponent, navIcon:'x-fa fa-home', default: true},
      { text: 'About', component: AboutComponent, navIcon:'x-fa fa-question' },
      { text: 'Components', navIcon: 'icon-buttons', children: [
        { text: 'Buttons', navIcon: 'icon-buttons', children: [
          { text: 'Button', component: ButtonComponent, navIcon: 'icon-buttons' },
          { text: 'SegmentedButton', navIcon: 'icon-segmented-buttons', hash: 'segmentedbutton', url: r+'components/buttons/segmentedbutton/segmentedbutton.html' },
          { text: 'SplitButton', navIcon: 'icon-buttons', hash: 'splitbutton', url: r+'components/buttons/splitbutton/splitbutton.html' }
        ]
      }
      ]},
      {text:'Grids', navIcon: 'icon-grids', children: [
        {text:'Core Features', navIcon: 'icon-grids', hash: 'button', children: [
          {text:'Basic Grid', component: BasicgridComponent,   hash:'basicgrid',   url:r+'grids/corefeatures/basicgrid/basicgrid.html',      navIcon:'icon-grids'},
          {text:'Grouped Grid', hash:'groupedgrid', url:r+'grids/corefeatures/groupedgrid/groupedgrid.html',  navIcon:'icon-grouped-grid'},
          {text:'Locked Grid',  hash:'lockedgrid',  url:r+'grids/corefeatures/lockedrid/lockedgrid.html',     navIcon:'icon-locking-grid'},
          {text:'Editable Grid',hash:'editablegrid',url:r+'grids/corefeatures/editablegrid/editablegrid.html',navIcon:'icon-editable-grid'},
          {text:'XML Grid',     hash:'xmlgrid',     url:r+'grids/corefeatures/xmlgrid/xmlgrid.html',          navIcon:'icon-xml-grid'}
        ]}
      ]}
    ]
  }

}());
