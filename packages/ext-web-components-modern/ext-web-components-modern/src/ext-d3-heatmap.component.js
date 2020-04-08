import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import ElementParser from './common/ElementParser.js';

export default class EWCD3_heatmap extends Ext_d3_HeatMap {
  constructor() {
    super ([], []);
    this.xtype = 'd3-heatmap';
  }
}
try {
  if (window.customElements.get('ext-d3-heatmap') == undefined) {
    window.customElements.define('ext-d3-heatmap', ElementParser.withParsedCallback(EWCD3_heatmap));
  }
}
catch(e) {
  if (window.customElements.get('ext-d3-heatmap') == undefined) {
    window.customElements.define('ext-d3-heatmap', EWCD3_heatmap);
  }
}
