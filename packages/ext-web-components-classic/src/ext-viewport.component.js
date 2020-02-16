import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCViewport extends Ext_Viewport {
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
