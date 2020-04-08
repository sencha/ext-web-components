import Ext_menu_ColorPicker from './Ext/menu/ColorPicker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColormenu extends Ext_menu_ColorPicker {
  constructor() {
    super ([], []);
    this.xtype = 'colormenu';
  }
}
try {
  if (window.customElements.get('ext-colormenu') == undefined) {
    window.customElements.define('ext-colormenu', ElementParser.withParsedCallback(EWCColormenu));
  }
}
catch(e) {
  if (window.customElements.get('ext-colormenu') == undefined) {
    window.customElements.define('ext-colormenu', EWCColormenu);
  }
}
