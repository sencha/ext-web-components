import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Form from './Ext/pivot/plugin/configurator/Form.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPivotconfigform =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigform, _Ext_pivot_plugin_con);

  function ExtPivotconfigform() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigform';
    return _this;
  }

  return ExtPivotconfigform;
}(Ext_pivot_plugin_configurator_Form);

export { ExtPivotconfigform as default };
window.customElements.define('ext-pivotconfigform', HTMLParsedElement.withParsedCallback(ExtPivotconfigform));