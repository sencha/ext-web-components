import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_sunburst extends Ext_d3_hierarchy_partition_Sunburst {
  constructor() {
    super ([], []);
    this.xtype = 'd3-sunburst';
  }
}
try {
  if (window.customElements.get('ext-d3-sunburst') == undefined) {
    window.customElements.define('ext-d3-sunburst', ElementParser.withParsedCallback(EWCD3_sunburst));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-sunburst') == undefined) {
    window.customElements.define('ext-d3-sunburst', EWCD3_sunburst);
  }
}
