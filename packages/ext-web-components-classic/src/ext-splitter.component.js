import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSplitter extends Ext_resizer_Splitter {
  constructor() {
    super ([], []);
    this.xtype = 'splitter';
  }
}
try {
  if (window.customElements.get('ext-splitter') == undefined) {
    window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));
  }
}
catch(e) {
  if (window.customElements.get('ext-splitter') == undefined) {
    window.customElements.define('ext-splitter', EWCSplitter);
  }
}
