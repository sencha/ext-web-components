import './CollapsiblePanelComponent.html';
import { mediumText } from './CollapsiblePanelComponentDummy.js';

Ext.require('Ext.panel.Collapser');

export default class CollapsiblePanelComponent {
    readyContainer = (event) => {
        this.containerCmp = event.detail.cmp;
        this.containerCmp.setLayout(Ext.os.is.Phone ? 'fit' : 'auto');
        this.containerCmp.setPadding(Ext.os.is.Phone ? 0 : 10);
    }

    topPanelReady = (event) => {
        this.topPanelCmp = event.detail.cmp;
        this.topPanelCmp.setHeight(Ext.os.is.Phone ? undefined : 400);
        this.topPanelCmp.setWidth(Ext.os.is.Phone ? undefined : 400);
        this.topPanelCmp.setHtml(`<div>${mediumText}</div>`);
    }

    rightPanelReady = (event) => {
        this.rightPanelCmp = event.detail.cmp;
        this.rightPanelCmp.setHtml(`<div>${mediumText}</div>`);
    }
}
