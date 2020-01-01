import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import ElementParser from './ElementParser.js';

export default class EWCD3_heatmap extends Ext_d3_HeatMap {
  constructor() {
    super ([], []);
    this.xtype = 'd3-heatmap';
  }
}
window.customElements.define('ext-d3-heatmap', ElementParser.withParsedCallback(EWCD3_heatmap));
