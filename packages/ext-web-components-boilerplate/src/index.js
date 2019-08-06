import './ewc';
import getMenu from './menu';
import { getRoutes } from '@sencha/ext-web-components-router/lib/ext-router.component';
import MainComponent from './view/main/MainComponent.js';

Ext.require([
    'Ext.layout.*',
    'Ext.data.TreeStore'
]);

function init() {
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent();
    document.body.innerHTML = window._code['main']['MainComponent.html'];
}

init();
