import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridcell =
/*#__PURE__*/
function (_Ext_grid_cell_Cell) {
  _inheritsLoose(ExtGridcell, _Ext_grid_cell_Cell);

  function ExtGridcell() {
    var _this;

    _this = _Ext_grid_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'gridcell';
    return _this;
  }

  return ExtGridcell;
}(Ext_grid_cell_Cell);

export { ExtGridcell as default };
window.customElements.define('ext-gridcell', HTMLParsedElement.withParsedCallback(ExtGridcell));