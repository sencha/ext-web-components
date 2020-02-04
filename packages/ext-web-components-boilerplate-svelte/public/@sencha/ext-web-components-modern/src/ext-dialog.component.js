import Ext_window_Window from './Ext/window/Window.js';
import ElementParser from './ElementParser.js';

export default class EWCDialog extends Ext_window_Window {
  constructor() {
    super ([], []);
    this.xtype = 'dialog';
  }
}
try {
  window.customElements.define('ext-dialog', ElementParser.withParsedCallback(EWCDialog));
}
catch(e) {
  window.customElements.define('ext-dialog', EWCDialog);
}
