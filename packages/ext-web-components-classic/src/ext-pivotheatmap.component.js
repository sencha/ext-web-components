import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotheatmap extends Ext_pivot_d3_HeatMap {
  constructor() {
    super ([], []);
    this.xtype = 'pivotheatmap';
  }
}
try {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', ElementParser.withParsedCallback(EWCPivotheatmap));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', EWCPivotheatmap);
  }
}
