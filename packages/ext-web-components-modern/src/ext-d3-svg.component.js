import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import ElementParser from './ElementParser.js';

export default class EWCD3_svg extends Ext_d3_svg_Svg {
  constructor() {
    super ([], []);
    this.xtype = 'd3-svg';
  }
}
window.customElements.define('ext-d3-svg', ElementParser.withParsedCallback(EWCD3_svg));
