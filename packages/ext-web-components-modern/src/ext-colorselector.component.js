import Ext_ux_colorpick_Selector from './Ext/ux/colorpick/Selector.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorselector extends Ext_ux_colorpick_Selector {
  constructor() {
    super ([], []);
    this.xtype = 'colorselector';
  }
}
try {
  if (window.customElements.get('ext-colorselector') == undefined) {
    window.customElements.define('ext-colorselector', ElementParser.withParsedCallback(EWCColorselector));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorselector') == undefined) {
    window.customElements.define('ext-colorselector', EWCColorselector);
  }
}
