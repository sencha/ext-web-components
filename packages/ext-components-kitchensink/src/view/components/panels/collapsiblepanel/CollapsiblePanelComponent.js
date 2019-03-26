import './CollapsiblePanelComponent.html';
import {mediumText} from './CollapsiblePanelComponentDummy.js';

Ext.require('Ext.panel.Collapser');

export default class CollapsiblePanelComponent {

  constructor () {
    console.log('in CollapsiblePanelComponent constructor');
  }

  readyContainer1(event) {
    var containerCmp = event.detail.cmp;
    this.containerCmp.setLayout(Ext.os.is.Phone ? 'fit' : 'auto');
    this.containerCmp.setPadding(Ext.os.is.Phone ? 0 : 10);
  }

  readypanel1(event) {
    this. panelCmp1 = event.detail.cmp;
    this.panelCmp1.setHeight(Ext.os.is.Phone ? undefined : 400);
    this.panelCmp1.setWidth(Ext.os.is.Phone ? undefined : 400);
    this.panelCmp1.setHtml(`<div>${mediumText}</div>`);
  }

  readypanel2(event) {
    this.panelCmp2 = event.detail.cmp;
    this.panelCmp2.setHtml(`<div>${mediumText}</div>`);
  }

}
