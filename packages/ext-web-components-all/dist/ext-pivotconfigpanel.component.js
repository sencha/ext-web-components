import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Panel from './Ext/pivot/plugin/configurator/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotconfigpanelComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigpanelComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigpanelComponent() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigpanel';
    return _this;
  }

  return ExtPivotconfigpanelComponent;
}(Ext_pivot_plugin_configurator_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigpanel', ExtPivotconfigpanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotconfigpanel', HTMLParsedElement.withParsedCallback(ExtPivotconfigpanelComponent));