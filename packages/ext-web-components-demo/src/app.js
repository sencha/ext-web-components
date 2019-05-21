//import '@sencha/ext-web-components'

//import '@sencha/ext-web-components/dist/ext-carousel.component';
import '@sencha/ext-web-components/dist/ext-renderercell.component';

import '@sencha/ext-web-components/dist/ext-container.component';
import '@sencha/ext-web-components/dist/ext-panel.component';
import '@sencha/ext-web-components/dist/ext-button.component';
import '@sencha/ext-web-components/dist/ext-dataview.component';
import '@sencha/ext-web-components/dist/ext-searchfield.component';
import '@sencha/ext-web-components/dist/ext-treelist.component';
import '@sencha/ext-web-components/dist/ext-tabpanel.component';
import '@sencha/ext-web-components/dist/ext-titlebar.component';
import '@sencha/ext-web-components/dist/ext-toolbar.component';
import '@sencha/ext-web-components/dist/ext-grid.component';
import '@sencha/ext-web-components/dist/ext-column.component';
import '@sencha/ext-web-components/dist/ext-widget.component';

//import CarouselComponent from './view/carousel/CarouselComponent.js';
//import ButtonComponent from './view/button/ButtonComponent.js';
//import GridComponent from './view/grid/GridComponent.js';
import ColumnsComponent from './view/columns/ColumnsComponent.js';

// var globalOne = function(event) {
//   console.log('globalOne')
// }

// function globalOne(event) {
//   console.log('globalOne')
// }



(function () {
    Ext.onReady(function() {
        window.columns = new ColumnsComponent() 
        document.body.innerHTML = window._code['columns']['ColumnsComponent' + '.html']
    });


//   init();

//   function doIt(c) {
//     var n = c.name.indexOf('Component');
//     var o = c.name.substring(0, n).toLowerCase();
//     window[o] = new c()
//     document.body.innerHTML = window._code[o][c.name + '.html']
//   }


//   function init() {
// //    doIt(GridComponent)
// //    doIt(ButtonComponent)
// //    doIt(CarouselComponent)
//         doIt(ColumnsComponent)

//   }

  }());