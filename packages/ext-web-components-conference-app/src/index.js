import * as d3 from 'd3';

import '@sencha/ext-web-components/dist/ext-button.component';
import '@sencha/ext-web-components/dist/ext-sheet.component';
import '@sencha/ext-web-components/dist/ext-dataview.component';
import '@sencha/ext-web-components/dist/ext-searchfield.component';
import '@sencha/ext-web-components/dist/ext-treelist.component';
import '@sencha/ext-web-components/dist/ext-panel.component';
import '@sencha/ext-web-components/dist/ext-tabpanel.component';
import '@sencha/ext-web-components/dist/ext-titlebar.component';
import '@sencha/ext-web-components/dist/ext-toolbar.component';
import '@sencha/ext-web-components/dist/ext-column.component';
import '@sencha/ext-web-components/dist/ext-grid.component';
import '@sencha/ext-web-components/dist/ext-combobox.component';
import '@sencha/ext-web-components/dist/ext-list.component';
import '@sencha/ext-web-components/dist/ext-container.component';
import '@sencha/ext-web-components/dist/ext-calendar-days.component';


import getMenu from './menu';
import { getRoutes } from '@sencha/ext-web-components-router/dist/ext-router.component';
import MainComponent from './view/main/MainComponent.js';

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

init();
