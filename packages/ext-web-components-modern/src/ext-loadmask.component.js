import Ext_LoadMask from './Ext/LoadMask.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCLoadmask extends Ext_LoadMask {
  constructor() {
    super ([], []);
    this.xtype = 'loadmask';
  }
}
try {
  window.customElements.define('ext-loadmask', ElementParser.withParsedCallback(EWCLoadmask));
}
catch(e) {
  window.customElements.define('ext-loadmask', EWCLoadmask);
}
