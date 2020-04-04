import Ext_ActionSheet from './Ext/ActionSheet.js';
import ElementParser from './common/ElementParser.js';

export default class EWCActionsheet extends Ext_ActionSheet {
  constructor() {
    super ([], []);
    this.xtype = 'actionsheet';
  }
}
try {
  if (window.customElements.get('ext-actionsheet') == undefined) {
    window.customElements.define('ext-actionsheet', ElementParser.withParsedCallback(EWCActionsheet));
  }
}
catch(e) {
  if (window.customElements.get('ext-actionsheet') == undefined) {
    window.customElements.define('ext-actionsheet', EWCActionsheet);
  }
}
