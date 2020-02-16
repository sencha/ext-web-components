import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotconfigform =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigform, _Ext_pivot_plugin_con);

  function EWCPivotconfigform() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigform';
    return _this;
  }

  return EWCPivotconfigform;
}(Ext_pivot_plugin_configurator_Form);

export { EWCPivotconfigform as default };

try {
  window.customElements.define('ext-pivotconfigform', ElementParser.withParsedCallback(EWCPivotconfigform));
} catch (e) {
  window.customElements.define('ext-pivotconfigform', EWCPivotconfigform);
}