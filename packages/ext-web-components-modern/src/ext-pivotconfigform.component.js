import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotconfigform extends Ext_pivot_plugin_configurator_Form {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigform';
  }
}
window.customElements.define('ext-pivotconfigform', ElementParser.withParsedCallback(EWCPivotconfigform));
