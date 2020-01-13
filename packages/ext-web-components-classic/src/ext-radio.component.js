import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './ElementParser.js';

export default class EWCRadio extends Ext_form_Radio {
  constructor() {
    super ([], []);
    this.xtype = 'radio';
  }
}
window.customElements.define('ext-radio', ElementParser.withParsedCallback(EWCRadio));
