import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCPivotconfigfield extends Ext_pivot_plugin_configurator_Column {
  constructor() {
    super ([], []);
    this.xtype = 'pivotconfigfield';
  }
}
try {
  window.customElements.define('ext-pivotconfigfield', ElementParser.withParsedCallback(EWCPivotconfigfield));
}
catch(e) {
  window.customElements.define('ext-pivotconfigfield', EWCPivotconfigfield);
}
