import Ext_Button from './Ext/Button.js';
import ElementParser from './ElementParser.js';

export default class EWCButton extends Ext_Button {
  constructor() {
    super ([], []);
    this.xtype = 'button';
  }
}
window.customElements.define('ext-button', ElementParser.withParsedCallback(EWCButton));
