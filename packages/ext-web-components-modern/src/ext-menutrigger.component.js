import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import ElementParser from './ElementParser.js';

export default class EWCMenutrigger extends Ext_field_trigger_Menu {
  constructor() {
    super ([], []);
    this.xtype = 'menutrigger';
  }
}
window.customElements.define('ext-menutrigger', ElementParser.withParsedCallback(EWCMenutrigger));
