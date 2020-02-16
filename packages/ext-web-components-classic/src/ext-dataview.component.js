import Ext_DataView from './Ext/DataView.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDataview extends Ext_DataView {
  constructor() {
    super ([], []);
    this.xtype = 'dataview';
  }
}
try {
  window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
}
catch(e) {
  window.customElements.define('ext-dataview', EWCDataview);
}
