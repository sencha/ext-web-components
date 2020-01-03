import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import '@sencha/ext-web-components-modern/dist/ext-button.component';
import '@sencha/ext-web-components-modern/dist/ext-dataview.component';
import '@sencha/ext-web-components-modern/dist/ext-searchfield.component';
import '@sencha/ext-web-components-modern/dist/ext-treelist.component';
import '@sencha/ext-web-components-modern/dist/ext-panel.component';
import '@sencha/ext-web-components-modern/dist/ext-tabpanel.component';
import '@sencha/ext-web-components-modern/dist/ext-titlebar.component';
import '@sencha/ext-web-components-modern/dist/ext-toolbar.component';
import '@sencha/ext-web-components-modern/dist/ext-column.component';
import '@sencha/ext-web-components-modern/dist/ext-grid.component';
import '@sencha/ext-web-components-modern/dist/ext-sheet.component';

import App from './App';

window.Ext.require([
    'Ext.layout.*',
    'Ext.data.TreeStore'
]);

  const Ext = window['Ext'];
  Ext.onReady(function () {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
  });



