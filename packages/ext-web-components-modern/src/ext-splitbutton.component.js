import Ext_SplitButton from './Ext/SplitButton.js';
import ElementParser from './common/ElementParser.js';

export default class EWCSplitbutton extends Ext_SplitButton {
  constructor() {
    super ([], []);
    this.xtype = 'splitbutton';
  }
}
try {
  if (window.customElements.get('ext-splitbutton') == undefined) {
    window.customElements.define('ext-splitbutton', ElementParser.withParsedCallback(EWCSplitbutton));
  }
}
catch(e) {
  if (window.customElements.get('ext-splitbutton') == undefined) {
    window.customElements.define('ext-splitbutton', EWCSplitbutton);
  }
}
