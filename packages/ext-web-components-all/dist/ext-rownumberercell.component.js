import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRownumberercell =
/*#__PURE__*/
function (_Ext_grid_cell_RowNum) {
  _inheritsLoose(ExtRownumberercell, _Ext_grid_cell_RowNum);

  function ExtRownumberercell() {
    var _this;

    _this = _Ext_grid_cell_RowNum.call(this, [], []) || this;
    _this.xtype = 'rownumberercell';
    return _this;
  }

  return ExtRownumberercell;
}(Ext_grid_cell_RowNumberer);

export { ExtRownumberercell as default };
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(ExtRownumberercell));