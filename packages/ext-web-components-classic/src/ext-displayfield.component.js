import Ext_form_Display from './Ext/form/Display.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCDisplayfield extends Ext_form_Display {
  constructor() {
    super ([], []);
    this.xtype = 'displayfield';
  }
}
try {
  window.customElements.define('ext-displayfield', ElementParser.withParsedCallback(EWCDisplayfield));
}
catch(e) {
  window.customElements.define('ext-displayfield', EWCDisplayfield);
}
