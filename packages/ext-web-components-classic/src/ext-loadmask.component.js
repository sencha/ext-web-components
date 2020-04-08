import Ext_LoadMask from './Ext/LoadMask.js';
import ElementParser from './common/ElementParser.js';

export default class EWCLoadmask extends Ext_LoadMask {
  constructor() {
    super ([], []);
    this.xtype = 'loadmask';
  }
}
try {
  if (window.customElements.get('ext-loadmask') == undefined) {
    window.customElements.define('ext-loadmask', ElementParser.withParsedCallback(EWCLoadmask));
  }
}
catch(e) {
  if (window.customElements.get('ext-loadmask') == undefined) {
    window.customElements.define('ext-loadmask', EWCLoadmask);
  }
}
