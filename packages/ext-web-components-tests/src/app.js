Ext.require('Ext.*');

import '@sencha/ext-web-components-modern/dist/ext-router.component.js';
import { getRoutes } from '@sencha/ext-web-components-modern/dist/ext-router.component.js';
import '@sencha/ext-web-components-modern';

import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

function init() {
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent();
    document.body.innerHTML = window._code['main']['MainComponent.html'];
}

init();
