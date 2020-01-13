import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import ElementParser from './ElementParser.js';

export default class EWCPivottreemap extends Ext_pivot_d3_TreeMap {
  constructor() {
    super ([], []);
    this.xtype = 'pivottreemap';
  }
}
window.customElements.define('ext-pivottreemap', ElementParser.withParsedCallback(EWCPivottreemap));
