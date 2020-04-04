import Ext_viewport_Default from './Ext/viewport/Default.js';
import ElementParser from './common/ElementParser.js';

export default class EWCViewport extends Ext_viewport_Default {
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
