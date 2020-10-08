import Ext_DataView from './Ext/DataView.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDataview extends Ext_DataView {
  constructor() {
    super ([], []);
    this.xtype = 'dataview';
  }
}
try {
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', ElementParser.withParsedCallback(EWCDataview));
  }
}
catch(e) {
  if (window.customElements.get('ext-dataview') == undefined) {
    window.customElements.define('ext-dataview', EWCDataview);
  }
}
