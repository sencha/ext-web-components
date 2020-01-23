import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './ElementParser.js';

export default class EWCTitle extends Ext_panel_Title {
  constructor() {
    super ([], []);
    this.xtype = 'title';
  }
}
try {
  window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-title', EWCTitle);
}
