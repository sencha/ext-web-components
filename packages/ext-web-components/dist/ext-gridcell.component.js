import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell_Component from './Ext/grid/cell/Cell';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Cell_C) {
  _inheritsLoose(ExtGridcellComponent, _Ext_grid_cell_Cell_C);

  function ExtGridcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Cell_C.call(this, {}, [], []) || this;
    _this.xtype = 'gridcell';
    return _this;
  }

  return ExtGridcellComponent;
}(Ext_grid_cell_Cell_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcell', ExtGridcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcellComponent));