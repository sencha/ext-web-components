import './BasicPanelComponent.html';
import { shortText, mediumText } from './BasicPanelComponentDummy.js';

Ext.require('Ext.Toast');

export default class BasicPanelComponent {
    constructor() {
        this.text = Ext.os.is.Phone ? shortText : mediumText;
    }

    panelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        this.panelCmp.setHtml(this.text);
    }

    parentContainerReady = (event) => {
        this.parentContainerCmp = event.detail.cmp;
        const width = !Ext.os.is.Phone && 700;
        this.parentContainerCmp.setWidth(width);
    }

    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
        const type = Ext.os.is.Phone ? 'vbox' : 'hbox';
        this.containerCmp.setLayout({ type, pack: 'center', align: 'stretch' });
    }

    panelContainerReady = (event) => {
        this.panelContainerCmp = event.detail.cmp;
        const type = Ext.os.is.Phone ? 'vbox' : 'hbox';
        this.panelContainerCmp.setLayout({ type, pack: 'center', align: 'stretch' });
    }

    titlePanelReady = (event) => {
        this.titlePanelCmp = event.detail.cmp;
        this.titlePanelCmp.setHtml(this.text);
    }

    builtinPanelReady = (event) => {
        this.builtinPanelCmp = event.detail.cmp;
        this.builtinPanelCmp.setHtml(this.text);
        this.builtinPanelCmp.setTools([
            { type: 'minimize', handler: this.toolHandler.bind(this) },
            { type: 'refresh', handler: this.toolHandler.bind(this) },
            { type: 'search', handler: this.toolHandler.bind(this) },
            { type: 'save', handler: this.toolHandler.bind(this) },
            { type: 'menu', handler: this.toolHandler.bind(this) }
        ]);
    }

    toolHandler = (owner, tool) => {
        Ext.toast(`You clicked ${tool.config.type || 'a custom tool'}.`);
    }

    customtoolsPanelReady = (event) => {
        this.customtoolsPanelCmp = event.detail.cmp;
        this.customtoolsPanelCmp.setHtml(this.text);
        this.customtoolsPanelCmp.setTools([
            { iconCls: 'x-fa fa-wrench', handler: this.toolHandler.bind(this) },
            { iconCls: 'x-fa fa-reply', handler: this.toolHandler.bind(this) },
            { iconCls: 'x-fa fa-reply-all', handler: this.toolHandler.bind(this) }
        ]);
    }
}
