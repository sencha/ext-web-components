import  { getRoutes } from '@sencha/ext-components/lib/aa-router.component';
import '@sencha/ext-components/lib/ext-container.component';
import '@sencha/ext-components/lib/ext-carousel.component';
import '@sencha/ext-components/lib/ext-button.component';
import '@sencha/ext-components/lib/ext-dataview.component';
import '@sencha/ext-components/lib/ext-searchfield.component';
import '@sencha/ext-components/lib/ext-treelist.component';
import '@sencha/ext-components/lib/ext-panel.component';
import '@sencha/ext-components/lib/ext-tabpanel.component';
import '@sencha/ext-components/lib/ext-titlebar.component';
import '@sencha/ext-components/lib/ext-toolbar.component';
import '@sencha/ext-components/lib/ext-grid.component';
import '@sencha/ext-components/lib/ext-column.component';

import '@sencha/ext-components/lib/ext-formpanel.component';
import '@sencha/ext-components/lib/ext-sliderfield.component';
import '@sencha/ext-components/lib/ext-gauge.component';
import '@sencha/ext-components/lib/ext-colorselector.component';

import '@sencha/ext-components/lib/ext-draw.component';
import '@sencha/ext-components/lib/ext-spacer.component';

import '@sencha/ext-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-components/lib/ext-indicator.component';

import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent.html']
  }

}());
