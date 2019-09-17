import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_rangeeditor_Panel_Component from './Ext/pivot/plugin/rangeeditor/Panel';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotrangeeditorComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_ran) {
  _inheritsLoose(ExtPivotrangeeditorComponent, _Ext_pivot_plugin_ran);

  function ExtPivotrangeeditorComponent() {
    var _this;

    _this = _Ext_pivot_plugin_ran.call(this, {}, [], []) || this;
    _this.xtype = 'pivotrangeeditor';
    return _this;
  }

  return ExtPivotrangeeditorComponent;
}(Ext_pivot_plugin_rangeeditor_Panel_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotrangeeditor', ExtPivotrangeeditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotrangeeditor', HTMLParsedElement.withParsedCallback(ExtPivotrangeeditorComponent));