import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './ElementParser.js';

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
  console.log(e)
  window.customElements.define('ext-viewport', EWCViewport);
}
