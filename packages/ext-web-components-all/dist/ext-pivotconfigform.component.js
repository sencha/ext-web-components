import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Form_Component from './Ext/pivot/plugin/configurator/Form';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotconfigformComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigformComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigformComponent() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this) || this;
    _this.xtype = 'pivotconfigform';
    return _this;
  }

  return ExtPivotconfigformComponent;
}(Ext_pivot_plugin_configurator_Form_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigform', ExtPivotconfigformComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotconfigform', HTMLParsedElement.withParsedCallback(ExtPivotconfigformComponent));