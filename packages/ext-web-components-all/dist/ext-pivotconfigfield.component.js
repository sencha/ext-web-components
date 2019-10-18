import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotconfigfieldComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotconfigfieldComponent, _Ext_pivot_plugin_con);

  function ExtPivotconfigfieldComponent() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotconfigfield';
    return _this;
  }

  return ExtPivotconfigfieldComponent;
}(Ext_pivot_plugin_configurator_Column); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotconfigfield', ExtPivotconfigfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotconfigfield', HTMLParsedElement.withParsedCallback(ExtPivotconfigfieldComponent));