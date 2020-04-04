import Ext_view_MultiSelector from './Ext/view/MultiSelector.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMultiselector extends Ext_view_MultiSelector {
  constructor() {
    super ([], []);
    this.xtype = 'multiselector';
  }
}
try {
  if (window.customElements.get('ext-multiselector') == undefined) {
    window.customElements.define('ext-multiselector', ElementParser.withParsedCallback(EWCMultiselector));
  }
}
catch(e) {
  if (window.customElements.get('ext-multiselector') == undefined) {
    window.customElements.define('ext-multiselector', EWCMultiselector);
  }
}
