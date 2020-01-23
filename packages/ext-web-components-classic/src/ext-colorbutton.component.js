import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import ElementParser from './ElementParser.js';

export default class EWCColorbutton extends Ext_ux_colorpick_Button {
  constructor() {
    super ([], []);
    this.xtype = 'colorbutton';
  }
}
try {
  window.customElements.define('ext-colorbutton', ElementParser.withParsedCallback(EWCColorbutton));
}
catch(e) {
  window.customElements.define('ext-colorbutton', EWCColorbutton);
}
