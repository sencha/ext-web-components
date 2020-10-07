import Ext_Button from './Ext/Button.js';
import ElementParser from './common/ElementParser.js';

export default class EWCButton extends Ext_Button {
  constructor() {
    super ([], []);
    this.xtype = 'button';
  }
}
try {
  if (window.customElements.get('ext-button') == undefined) {
    window.customElements.define('ext-button', ElementParser.withParsedCallback(EWCButton));
  }
}
catch(e) {
  if (window.customElements.get('ext-button') == undefined) {
    window.customElements.define('ext-button', EWCButton);
  }
}
