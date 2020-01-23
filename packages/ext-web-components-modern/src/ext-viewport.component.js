import Ext_viewport_Default from './Ext/viewport/Default.js';
import ElementParser from './ElementParser.js';

export default class EWCViewport extends Ext_viewport_Default {
  constructor() {
    super ([], []);
    this.xtype = 'viewport';
  }
}
try {
  window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
}
catch(e) {
  window.customElements.define('ext-viewport', EWCViewport);
}
