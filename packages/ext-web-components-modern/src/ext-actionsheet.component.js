import Ext_ActionSheet from './Ext/ActionSheet.js';
import ElementParser from './ElementParser.js';

export default class EWCActionsheet extends Ext_ActionSheet {
  constructor() {
    super ([], []);
    this.xtype = 'actionsheet';
  }
}
window.customElements.define('ext-actionsheet', ElementParser.withParsedCallback(EWCActionsheet));
