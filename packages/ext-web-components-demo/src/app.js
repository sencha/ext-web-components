//import '@sencha/ext-web-components'

import '@sencha/ext-web-components/lib/ext-carousel.component';

import '@sencha/ext-web-components/lib/ext-container.component';



import '@sencha/ext-web-components/lib/ext-panel.component';

import '@sencha/ext-web-components/lib/ext-button.component';
import '@sencha/ext-web-components/lib/ext-dataview.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-treelist.component';
import '@sencha/ext-web-components/lib/ext-tabpanel.component';
import '@sencha/ext-web-components/lib/ext-titlebar.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-column.component';

import CarouselComponent from './view/carousel/CarouselComponent.js';
import ButtonComponent from './view/button/ButtonComponent.js';

(function () {

  init();

  function init() {
    //window.carousel = new CarouselComponent()
//    document.body.innerHTML = window._code['carousel']['CarouselComponent.html']

    window.button = new ButtonComponent()
    document.body.innerHTML = window._code['button']['ButtonComponent.html']

  }

  }());