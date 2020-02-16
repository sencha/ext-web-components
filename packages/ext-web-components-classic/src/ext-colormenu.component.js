import Ext_menu_ColorPicker from './Ext/menu/ColorPicker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCColormenu extends Ext_menu_ColorPicker {
  constructor() {
    super ([], []);
    this.xtype = 'colormenu';
  }
}
try {
  window.customElements.define('ext-colormenu', ElementParser.withParsedCallback(EWCColormenu));
}
catch(e) {
  window.customElements.define('ext-colormenu', EWCColormenu);
}
