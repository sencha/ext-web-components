import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCD3_partition extends Ext_d3_hierarchy_partition_Partition {
  constructor() {
    super ([], []);
    this.xtype = 'd3-partition';
  }
}
try {
  window.customElements.define('ext-d3-partition', ElementParser.withParsedCallback(EWCD3_partition));
}
catch(e) {
  window.customElements.define('ext-d3-partition', EWCD3_partition);
}
