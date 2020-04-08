import Ext_Window from './Ext/Window.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWindow extends Ext_Window {
  constructor() {
    super ([], []);
    this.xtype = 'window';
  }
}
try {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
  }
}
catch(e) {
  if (window.customElements.get('ext-window') == undefined) {
    window.customElements.define('ext-window', EWCWindow);
  }
}
