import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGridcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Cell) {
  _inheritsLoose(ExtGridcellComponent, _Ext_grid_cell_Cell);

  function ExtGridcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'gridcell';
    return _this;
  }

  return ExtGridcellComponent;
}(Ext_grid_cell_Cell); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcell', ExtGridcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcellComponent));