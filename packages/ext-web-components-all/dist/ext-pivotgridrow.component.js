import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Row_Component from './Ext/pivot/Row';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotgridrowComponent =
/*#__PURE__*/
function (_Ext_pivot_Row_Compon) {
  _inheritsLoose(ExtPivotgridrowComponent, _Ext_pivot_Row_Compon);

  function ExtPivotgridrowComponent() {
    var _this;

    _this = _Ext_pivot_Row_Compon.call(this) || this;
    _this.xtype = 'pivotgridrow';
    return _this;
  }

  return ExtPivotgridrowComponent;
}(Ext_pivot_Row_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridrow', ExtPivotgridrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrowComponent));