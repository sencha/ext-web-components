import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColorbutton extends Ext_ux_colorpick_Button {
  constructor() {
    super ([], []);
    this.xtype = 'colorbutton';
  }
}
try {
  if (window.customElements.get('ext-colorbutton') == undefined) {
    window.customElements.define('ext-colorbutton', ElementParser.withParsedCallback(EWCColorbutton));
  }
}
catch(e) {
  if (window.customElements.get('ext-colorbutton') == undefined) {
    window.customElements.define('ext-colorbutton', EWCColorbutton);
  }
}
