import Ext_resizer_BorderSplitter from './Ext/resizer/BorderSplitter.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBordersplitter extends Ext_resizer_BorderSplitter {
  constructor() {
    super ([], []);
    this.xtype = 'bordersplitter';
  }
}
try {
  if (window.customElements.get('ext-bordersplitter') == undefined) {
    window.customElements.define('ext-bordersplitter', ElementParser.withParsedCallback(EWCBordersplitter));
  }
}
catch(e) {
  if (window.customElements.get('ext-bordersplitter') == undefined) {
    window.customElements.define('ext-bordersplitter', EWCBordersplitter);
  }
}
