import Ext_form_Label from './Ext/form/Label.js';
import ElementParser from './common/ElementParser.js';

export default class EWCLabel extends Ext_form_Label {
  constructor() {
    super ([], []);
    this.xtype = 'label';
  }
}
try {
  if (window.customElements.get('ext-label') == undefined) {
    window.customElements.define('ext-label', ElementParser.withParsedCallback(EWCLabel));
  }
}
catch(e) {
  if (window.customElements.get('ext-label') == undefined) {
    window.customElements.define('ext-label', EWCLabel);
  }
}
