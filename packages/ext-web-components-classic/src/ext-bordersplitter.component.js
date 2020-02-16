import Ext_resizer_BorderSplitter from './Ext/resizer/BorderSplitter.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCBordersplitter extends Ext_resizer_BorderSplitter {
  constructor() {
    super ([], []);
    this.xtype = 'bordersplitter';
  }
}
try {
  window.customElements.define('ext-bordersplitter', ElementParser.withParsedCallback(EWCBordersplitter));
}
catch(e) {
  window.customElements.define('ext-bordersplitter', EWCBordersplitter);
}
