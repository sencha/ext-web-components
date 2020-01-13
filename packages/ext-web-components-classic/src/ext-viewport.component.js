import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './ElementParser.js';

export default class EWCViewport extends Ext_Viewport {
  constructor() {
    super ([], []);
    this.xtype = 'viewport';
  }
}
window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
