import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotconfigform extends Ext_pivot_plugin_configurator_Form {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigform';
  }
}
try {
  if (window.customElements.get('ext-pivotconfigform') == undefined) {
    window.customElements.define('ext-pivotconfigform', ElementParser.withParsedCallback(EWCPivotconfigform));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotconfigform') == undefined) {
    window.customElements.define('ext-pivotconfigform', EWCPivotconfigform);
  }
}
