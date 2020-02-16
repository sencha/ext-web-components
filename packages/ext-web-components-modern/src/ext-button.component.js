import Ext_Button from './Ext/Button.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCButton extends Ext_Button {
  constructor() {
    super ([], []);
    this.xtype = 'button';
  }
}
try {
  window.customElements.define('ext-button', ElementParser.withParsedCallback(EWCButton));
}
catch(e) {
  window.customElements.define('ext-button', EWCButton);
}
