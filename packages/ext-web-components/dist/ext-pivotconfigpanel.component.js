import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_pivot_plugin_configurator_Panel from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Panel.js';
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPivotconfigpanel =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(EWCPivotconfigpanel, _Ext_pivot_plugin_con);

  function EWCPivotconfigpanel() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigpanel';
    return _this;
  }

  return EWCPivotconfigpanel;
}(Ext_pivot_plugin_configurator_Panel);

export { EWCPivotconfigpanel as default };
window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(EWCPivotconfigpanel));