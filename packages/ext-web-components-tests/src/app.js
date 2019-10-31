Ext.require('Ext.*');
// import { getRoutes } from '@sencha/ext-web-components/dist/ext-router.component';
// import '@sencha/ext-web-components/dist/ext-button.component';
// import '@sencha/ext-web-components/dist/ext-dialog.component';
// import '@sencha/ext-web-components/dist/ext-dataview.component';
// import '@sencha/ext-web-components/dist/ext-searchfield.component';
// import '@sencha/ext-web-components/dist/ext-treelist.component';
// import '@sencha/ext-web-components/dist/ext-panel.component';
// import '@sencha/ext-web-components/dist/ext-tabpanel.component';
// import '@sencha/ext-web-components/dist/ext-titlebar.component';
// import '@sencha/ext-web-components/dist/ext-toolbar.component';
// import '@sencha/ext-web-components/dist/ext-column.component';
// import '@sencha/ext-web-components/dist/ext-grid.component';
// import '@sencha/ext-web-components/dist/ext-container.component';
// import '@sencha/ext-web-components/dist/ext-tooltip.component';
// import '@sencha/ext-web-components/dist/ext-menu.component';
// import '@sencha/ext-web-components/dist/ext-menuitem.component';
// import '@sencha/ext-web-components/dist/ext-widgetcell.component';
// import '@sencha/ext-web-components/dist/ext-sparklineline.component';
// import '@sencha/ext-web-components/dist/ext-numberfield.component';

import '@sencha/ext-web-components-all';
import '@sencha/ext-web-components-all/dist/ext-router.component.js';
import { getRoutes } from '@sencha/ext-web-components-all/dist/ext-router.component';
import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

function init() {
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent();
    document.body.innerHTML = window._code['main']['MainComponent.html'];
}

init();
