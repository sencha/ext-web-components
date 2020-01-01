import Ext_d3_hierarchy_partition_Sunburst from './Ext/d3/hierarchy/partition/Sunburst.js';
import ElementParser from './ElementParser.js';

export default class EWCD3_sunburst extends Ext_d3_hierarchy_partition_Sunburst {
  constructor() {
    super ([], []);
    this.xtype = 'd3-sunburst';
  }
}
window.customElements.define('ext-d3-sunburst', ElementParser.withParsedCallback(EWCD3_sunburst));
