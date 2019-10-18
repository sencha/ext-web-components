import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Container from './Ext/pivot/plugin/configurator/Container.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotconfigcontainerComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigcontainerComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigcontainerComponent() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigcontainer';
    return _this;
  }

  return ExtPivotconfigcontainerComponent;
}(Ext_pivot_plugin_configurator_Container); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigcontainer', ExtPivotconfigcontainerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotconfigcontainer', HTMLParsedElement.withParsedCallback(ExtPivotconfigcontainerComponent));