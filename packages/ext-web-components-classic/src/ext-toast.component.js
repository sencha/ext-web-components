import Ext_window_Toast from './Ext/window/Toast.js';
import ElementParser from './ElementParser.js';

export default class EWCToast extends Ext_window_Toast {
  constructor() {
    super ([], []);
    this.xtype = 'toast';
  }
}
window.customElements.define('ext-toast', ElementParser.withParsedCallback(EWCToast));
