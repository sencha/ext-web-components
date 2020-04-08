import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_pack extends Ext_d3_hierarchy_Pack {
  constructor() {
    super ([], []);
    this.xtype = 'd3-pack';
  }
}
try {
  if (window.customElements.get('ext-d3-pack') == undefined) {
    window.customElements.define('ext-d3-pack', ElementParser.withParsedCallback(EWCD3_pack));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-pack') == undefined) {
    window.customElements.define('ext-d3-pack', EWCD3_pack);
  }
}
