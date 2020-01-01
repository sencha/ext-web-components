import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import ElementParser from './ElementParser.js';

export default class EWCColorselector extends Ext_ux_colorpick_Selector {
  constructor() {
    super ([], []);
    this.xtype = 'colorselector';
  }
}
window.customElements.define('ext-colorselector', ElementParser.withParsedCallback(EWCColorselector));
