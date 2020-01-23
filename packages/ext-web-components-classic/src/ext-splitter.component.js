import Ext_resizer_Splitter from './Ext/resizer/Splitter.js';
import ElementParser from './ElementParser.js';

export default class EWCSplitter extends Ext_resizer_Splitter {
  constructor() {
    super ([], []);
    this.xtype = 'splitter';
  }
}
try {
  window.customElements.define('ext-splitter', ElementParser.withParsedCallback(EWCSplitter));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-splitter', EWCSplitter);
}
