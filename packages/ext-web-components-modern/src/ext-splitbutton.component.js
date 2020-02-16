import Ext_SplitButton from './Ext/SplitButton.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCSplitbutton extends Ext_SplitButton {
  constructor() {
    super ([], []);
    this.xtype = 'splitbutton';
  }
}
try {
  window.customElements.define('ext-splitbutton', ElementParser.withParsedCallback(EWCSplitbutton));
}
catch(e) {
  window.customElements.define('ext-splitbutton', EWCSplitbutton);
}
