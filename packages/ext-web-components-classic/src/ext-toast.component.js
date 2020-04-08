import Ext_window_Toast from './Ext/window/Toast.js';
import ElementParser from './common/ElementParser.js';

export default class EWCToast extends Ext_window_Toast {
  constructor() {
    super ([], []);
    this.xtype = 'toast';
  }
}
try {
  if (window.customElements.get('ext-toast') == undefined) {
    window.customElements.define('ext-toast', ElementParser.withParsedCallback(EWCToast));
  }
}
catch(e) {
  if (window.customElements.get('ext-toast') == undefined) {
    window.customElements.define('ext-toast', EWCToast);
  }
}
