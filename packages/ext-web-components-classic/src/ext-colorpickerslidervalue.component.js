import Ext_ux_colorpick_SliderValue from './Ext/ux/colorpick/SliderValue.js';
import ElementParser from './ElementParser.js';

export default class EWCColorpickerslidervalue extends Ext_ux_colorpick_SliderValue {
  constructor() {
    super ([], []);
    this.xtype = 'colorpickerslidervalue';
  }
}
window.customElements.define('ext-colorpickerslidervalue', ElementParser.withParsedCallback(EWCColorpickerslidervalue));
