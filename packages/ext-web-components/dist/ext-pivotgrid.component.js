import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Grid from './Ext/pivot/Grid';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotgridComponent =
/*#__PURE__*/
function (_Ext_pivot_Grid) {
  _inheritsLoose(ExtPivotgridComponent, _Ext_pivot_Grid);

  function ExtPivotgridComponent() {
    var _this;

    _this = _Ext_pivot_Grid.call(this, [], []) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return ExtPivotgridComponent;
}(Ext_pivot_Grid); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgrid', ExtPivotgridComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgridComponent));