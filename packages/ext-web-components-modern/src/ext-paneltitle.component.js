import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPaneltitle extends Ext_panel_Title {
  constructor() {
    super ([], []);
    this.xtype = 'paneltitle';
  }
}
try {
  if (window.customElements.get('ext-paneltitle') == undefined) {
    window.customElements.define('ext-paneltitle', ElementParser.withParsedCallback(EWCPaneltitle));
  }
}
catch(e) {
  if (window.customElements.get('ext-paneltitle') == undefined) {
    window.customElements.define('ext-paneltitle', EWCPaneltitle);
  }
}
