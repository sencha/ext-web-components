import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRadio extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radio';
  }
}
try {
  if (window.customElements.get('ext-radio') == undefined) {
    window.customElements.define('ext-radio', ElementParser.withParsedCallback(EWCRadio));
  }
}
catch(e) {
  if (window.customElements.get('ext-radio') == undefined) {
    window.customElements.define('ext-radio', EWCRadio);
  }
}
