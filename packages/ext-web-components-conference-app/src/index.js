import { getRoutes } from '@sencha/ext-web-components-modern/dist/ext-router.component';
import '@sencha/ext-web-components-modern/dist/ext-button.component';
import '@sencha/ext-web-components-modern/dist/ext-sheet.component';
import '@sencha/ext-web-components-modern/dist/ext-dataview.component';
import '@sencha/ext-web-components-modern/dist/ext-searchfield.component';
import '@sencha/ext-web-components-modern/dist/ext-treelist.component';
import '@sencha/ext-web-components-modern/dist/ext-panel.component';
import '@sencha/ext-web-components-modern/dist/ext-tab.component';
import '@sencha/ext-web-components-modern/dist/ext-tabpanel.component';
import '@sencha/ext-web-components-modern/dist/ext-tabbar.component';

import '@sencha/ext-web-components-modern/dist/ext-titlebar.component';
import '@sencha/ext-web-components-modern/dist/ext-toolbar.component';
import '@sencha/ext-web-components-modern/dist/ext-column.component';
import '@sencha/ext-web-components-modern/dist/ext-grid.component';
import '@sencha/ext-web-components-modern/dist/ext-combobox.component';
import '@sencha/ext-web-components-modern/dist/ext-list.component';
import '@sencha/ext-web-components-modern/dist/ext-container.component';
import '@sencha/ext-web-components-modern/dist/ext-calendar-days.component';

import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';
import * as d3 from 'd3';

Ext.require([
    'Ext.layout.*',
    'Ext.data.TreeStore'
]);

function init() {
    window.d3 = d3;
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent();
    document.body.innerHTML = window._code['main']['MainComponent.html'];
}

Ext.onReady(function() {
    init();
});
