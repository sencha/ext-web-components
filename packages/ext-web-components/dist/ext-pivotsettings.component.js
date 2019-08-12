import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Settings_Component from './Ext/pivot/plugin/configurator/Settings';
export var ExtPivotsettingsComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotsettingsComponent, _Ext_pivot_plugin_con);

  function ExtPivotsettingsComponent() {
    return _Ext_pivot_plugin_con.call(this, '', '', {}, '') || this;
  }

  return ExtPivotsettingsComponent;
}(Ext_pivot_plugin_configurator_Settings_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotsettings', ExtPivotsettingsComponent);
  });
})();