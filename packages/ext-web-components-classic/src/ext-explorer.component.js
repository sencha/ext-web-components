import Ext_ux_Explorer from './Ext/ux/Explorer.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCExplorer extends Ext_ux_Explorer {
  constructor() {
    super ([], []);
    this.xtype = 'explorer';
  }
}
try {
  window.customElements.define('ext-explorer', ElementParser.withParsedCallback(EWCExplorer));
}
catch(e) {
  window.customElements.define('ext-explorer', EWCExplorer);
}
