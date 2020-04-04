import Ext_form_Display from './Ext/form/Display.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDisplayfield extends Ext_form_Display {
  constructor() {
    super ([], []);
    this.xtype = 'displayfield';
  }
}
try {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', ElementParser.withParsedCallback(EWCDisplayfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', EWCDisplayfield);
  }
}
