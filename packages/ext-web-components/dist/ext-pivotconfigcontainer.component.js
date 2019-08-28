import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Container_Component from './Ext/pivot/plugin/configurator/Container';
export var ExtPivotconfigcontainerComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigcontainerComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigcontainerComponent() {
    return _Ext_pivot_plugin_con.call(this, '', '', {}, '') || this;
  }

  return ExtPivotconfigcontainerComponent;
}(Ext_pivot_plugin_configurator_Container_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotconfigcontainer', ExtPivotconfigcontainerComponent);
  });
})();