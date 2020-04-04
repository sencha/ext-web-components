import Ext_Viewport from './Ext/Viewport.js';
import ElementParser from './common/ElementParser.js';

export default class EWCViewport extends Ext_Viewport {
  constructor() {
    super ([], []);
    this.xtype = 'viewport';
  }
}
try {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', ElementParser.withParsedCallback(EWCViewport));
  }
}
catch(e) {
  if (window.customElements.get('ext-viewport') == undefined) {
    window.customElements.define('ext-viewport', EWCViewport);
  }
}
