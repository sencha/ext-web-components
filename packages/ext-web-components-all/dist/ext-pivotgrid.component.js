import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Grid_Component from './Ext/pivot/Grid';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotgridComponent =
/*#__PURE__*/
function (_Ext_pivot_Grid_Compo) {
  _inheritsLoose(ExtPivotgridComponent, _Ext_pivot_Grid_Compo);

  function ExtPivotgridComponent() {
    var _this;

    _this = _Ext_pivot_Grid_Compo.call(this) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return ExtPivotgridComponent;
}(Ext_pivot_Grid_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgrid', ExtPivotgridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgridComponent));