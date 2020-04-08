import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivottreemap extends Ext_pivot_d3_TreeMap {
  constructor() {
    super ([], []);
    this.xtype = 'pivottreemap';
  }
}
try {
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', ElementParser.withParsedCallback(EWCPivottreemap));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivottreemap') == undefined) {
    window.customElements.define('ext-pivottreemap', EWCPivottreemap);
  }
}
