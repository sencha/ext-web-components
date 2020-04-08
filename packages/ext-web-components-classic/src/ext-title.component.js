import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTitle extends Ext_panel_Title {
  constructor() {
    super ([], []);
    this.xtype = 'title';
  }
}
try {
  if (window.customElements.get('ext-title') == undefined) {
    window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
  }
}
catch(e) {
  if (window.customElements.get('ext-title') == undefined) {
    window.customElements.define('ext-title', EWCTitle);
  }
}
