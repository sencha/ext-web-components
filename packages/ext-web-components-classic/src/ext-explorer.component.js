import Ext_ux_Explorer from './Ext/ux/Explorer.js';
import ElementParser from './common/ElementParser.js';

export default class EWCExplorer extends Ext_ux_Explorer {
  constructor() {
    super ([], []);
    this.xtype = 'explorer';
  }
}
try {
  if (window.customElements.get('ext-explorer') == undefined) {
    window.customElements.define('ext-explorer', ElementParser.withParsedCallback(EWCExplorer));
  }
}
catch(e) {
  if (window.customElements.get('ext-explorer') == undefined) {
    window.customElements.define('ext-explorer', EWCExplorer);
  }
}
