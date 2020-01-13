import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import ElementParser from './ElementParser.js';

export default class EWCD3 extends Ext_d3_svg_Svg {
  constructor() {
    super ([], []);
    this.xtype = 'd3';
  }
}
window.customElements.define('ext-d3', ElementParser.withParsedCallback(EWCD3));
