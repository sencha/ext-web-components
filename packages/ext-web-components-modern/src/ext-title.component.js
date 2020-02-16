import Ext_Title from './Ext/Title.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCTitle extends Ext_Title {
  constructor() {
    super ([], []);
    this.xtype = 'title';
  }
}
try {
  window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
}
catch(e) {
  window.customElements.define('ext-title', EWCTitle);
}
