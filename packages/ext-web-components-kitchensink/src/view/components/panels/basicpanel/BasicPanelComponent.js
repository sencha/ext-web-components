import './BasicPanelComponent.html';
import { shortText, mediumText } from './BasicPanelComponentDummy.js';

Ext.require('Ext.Toast');

export default class BasicPanelComponent {
  constructor () {
    console.log('in BasicPanelComponent constructor');
    this.text = Ext.os.is.Phone ? shortText : mediumText;
  }

  readypanel1 = (event) => {
    this.panelCmp1 = event.detail.cmp;
    this.panelCmp1.setHtml(this.text);
  }

  readycontainer1 = (event) => {
    this.containerCmp1 = event.detail.cmp;
    const width = !Ext.os.is.Phone && 700;
    this.containerCmp1.setWidth(width);
  }

  readycontainer2 = (event) => {
    this.containerCmp2 = event.detail.cmp;
    const type = Ext.os.is.Phone ? 'vbox' : 'hbox';
    this.containerCmp2.setLayout({ type, pack: 'center', align: 'stretch' });
  }

  readycontainer3 = (event) => {
    this.containerCmp3 = event.detail.cmp;
    const type = Ext.os.is.Phone ? 'vbox' : 'hbox';
    this.containerCmp3.setLayout({ type, pack: 'center', align: 'stretch' });
  }

  readypanel2 = (event) => {
    this.panelCmp2 = event.detail.cmp;
    this.panelCmp2.setHtml(this.text);
  }

  readypanel3 = (event) => {
    this.panelCmp3 = event.detail.cmp;
    this.panelCmp3.setHtml(this.text);
    this.panelCmp3.setTools([
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

  readypanel4 = (event) => {
    this.panelCmp4 = event.detail.cmp;
    this.panelCmp4.setHtml(this.text);
    this.panelCmp4.setTools([
      { iconCls: 'x-fa fa-wrench', handler: this.toolHandler.bind(this) },
      { iconCls: 'x-fa fa-reply', handler: this.toolHandler.bind(this) },
      { iconCls: 'x-fa fa-reply-all', handler: this.toolHandler.bind(this) }
    ]);
  }
}
