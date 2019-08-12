import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Form_Component from './Ext/pivot/plugin/configurator/Form';
export var ExtPivotconfigformComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigformComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigformComponent() {
    return _Ext_pivot_plugin_con.call(this, '', '', {}, '') || this;
  }

  return ExtPivotconfigformComponent;
}(Ext_pivot_plugin_configurator_Form_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotconfigform', ExtPivotconfigformComponent);
  });
})();