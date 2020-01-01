import Ext_LoadMask from './Ext/LoadMask.js';
import ElementParser from './ElementParser.js';

export default class EWCLoadmask extends Ext_LoadMask {
  constructor() {
    super ([], []);
    this.xtype = 'loadmask';
  }
}
window.customElements.define('ext-loadmask', ElementParser.withParsedCallback(EWCLoadmask));
