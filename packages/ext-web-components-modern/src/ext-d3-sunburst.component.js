import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCD3_sunburst extends Ext_d3_hierarchy_partition_Sunburst {
  constructor() {
    super ([], []);
    this.xtype = 'd3-sunburst';
  }
}
try {
  window.customElements.define('ext-d3-sunburst', ElementParser.withParsedCallback(EWCD3_sunburst));
}
catch(e) {
  window.customElements.define('ext-d3-sunburst', EWCD3_sunburst);
}
