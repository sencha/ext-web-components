import Ext_viewport_Default from './Ext/viewport/Default.js';
import ElementParser from './ElementParser.js';

export default class EWCViewport extends Ext_viewport_Default {
  constructor() {
    super ([], []);
    this.xtype = 'viewport';
  }
}
window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
