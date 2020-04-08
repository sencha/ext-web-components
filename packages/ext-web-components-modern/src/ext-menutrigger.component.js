import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import ElementParser from './common/ElementParser.js';

export default class EWCMenutrigger extends Ext_field_trigger_Menu {
  constructor() {
    super ([], []);
    this.xtype = 'menutrigger';
  }
}
try {
  if (window.customElements.get('ext-menutrigger') == undefined) {
    window.customElements.define('ext-menutrigger', ElementParser.withParsedCallback(EWCMenutrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-menutrigger') == undefined) {
    window.customElements.define('ext-menutrigger', EWCMenutrigger);
  }
}
