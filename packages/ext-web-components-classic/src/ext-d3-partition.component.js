import Ext_d3_hierarchy_partition_Partition from './Ext/d3/hierarchy/partition/Partition.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_partition extends Ext_d3_hierarchy_partition_Partition {
  constructor() {
    super ([], []);
    this.xtype = 'd3-partition';
  }
}
try {
  if (window.customElements.get('ext-d3-partition') == undefined) {
    window.customElements.define('ext-d3-partition', ElementParser.withParsedCallback(EWCD3_partition));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-partition') == undefined) {
    window.customElements.define('ext-d3-partition', EWCD3_partition);
  }
}
