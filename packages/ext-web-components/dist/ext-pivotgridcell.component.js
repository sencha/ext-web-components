import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPivotgridcellComponent =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(ExtPivotgridcellComponent, _Ext_pivot_cell_Cell);

  function ExtPivotgridcellComponent() {
    var _this;

    _this = _Ext_pivot_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'pivotgridcell';
    return _this;
  }

  return ExtPivotgridcellComponent;
}(Ext_pivot_cell_Cell); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridcell', ExtPivotgridcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcellComponent));