import Ext_window_Window from './Ext/window/Window.js';
import ElementParser from './common/ElementParser.js';

export default class EWCWindow extends Ext_window_Window {
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
