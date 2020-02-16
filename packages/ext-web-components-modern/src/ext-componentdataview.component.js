import Ext_dataview_Component from './Ext/dataview/Component.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCComponentdataview extends Ext_dataview_Component {
  constructor() {
    super ([], []);
    this.xtype = 'componentdataview';
  }
}
try {
  window.customElements.define('ext-componentdataview', ElementParser.withParsedCallback(EWCComponentdataview));
}
catch(e) {
  window.customElements.define('ext-componentdataview', EWCComponentdataview);
}
