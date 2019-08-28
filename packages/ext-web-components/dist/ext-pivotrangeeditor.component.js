import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_rangeeditor_Panel_Component from './Ext/pivot/plugin/rangeeditor/Panel';
export var ExtPivotrangeeditorComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_ran) {
  _inheritsLoose(ExtPivotrangeeditorComponent, _Ext_pivot_plugin_ran);

  function ExtPivotrangeeditorComponent() {
    return _Ext_pivot_plugin_ran.call(this, '', '', {}, '') || this;
  }

  return ExtPivotrangeeditorComponent;
}(Ext_pivot_plugin_rangeeditor_Panel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditorComponent);
  });
})();