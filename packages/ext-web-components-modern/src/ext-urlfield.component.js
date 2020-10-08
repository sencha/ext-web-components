import Ext_form_Url from './Ext/form/Url.js';
import ElementParser from './common/ElementParser.js';

export default class EWCUrlfield extends Ext_form_Url {
  constructor() {
    super ([], []);
    this.xtype = 'urlfield';
  }
}
try {
  if (window.customElements.get('ext-urlfield') == undefined) {
    window.customElements.define('ext-urlfield', ElementParser.withParsedCallback(EWCUrlfield));
  }
}
catch(e) {
  if (window.customElements.get('ext-urlfield') == undefined) {
    window.customElements.define('ext-urlfield', EWCUrlfield);
  }
}
