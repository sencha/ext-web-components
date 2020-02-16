import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPaneltitle extends Ext_panel_Title {
  constructor() {
    super ([], []);
    this.xtype = 'paneltitle';
  }
}
try {
  window.customElements.define('ext-paneltitle', ElementParser.withParsedCallback(EWCPaneltitle));
}
catch(e) {
  window.customElements.define('ext-paneltitle', EWCPaneltitle);
}
