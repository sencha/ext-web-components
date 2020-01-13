import Ext_DataView from './Ext/DataView.js';
import ElementParser from './ElementParser.js';

export default class EWCDataview extends Ext_DataView {
  constructor() {
    super ([], []);
    this.xtype = 'dataview';
  }
}
window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
