import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Panel_Component from './Ext/pivot/plugin/configurator/Panel';
export var ExtPivotconfigpanelComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigpanelComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigpanelComponent() {
    return _Ext_pivot_plugin_con.call(this, '', '', {}, '') || this;
  }

  return ExtPivotconfigpanelComponent;
}(Ext_pivot_plugin_configurator_Panel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanelComponent);
  });
})();