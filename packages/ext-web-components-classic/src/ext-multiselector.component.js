import Ext_view_MultiSelector from './Ext/view/MultiSelector.js';
import ElementParser from './ElementParser.js';

export default class EWCMultiselector extends Ext_view_MultiSelector {
  constructor() {
    super ([], []);
    this.xtype = 'multiselector';
  }
}
window.customElements.define('ext-multiselector', ElementParser.withParsedCallback(EWCMultiselector));
