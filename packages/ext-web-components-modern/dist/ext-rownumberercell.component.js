import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import ElementParser from './ElementParser.js';

var EWCRownumberercell =
/*#__PURE__*/
function (_Ext_grid_cell_RowNum) {
  _inheritsLoose(EWCRownumberercell, _Ext_grid_cell_RowNum);

  function EWCRownumberercell() {
    var _this;

    _this = _Ext_grid_cell_RowNum.call(this, [], []) || this;
    _this.xtype = 'rownumberercell';
    return _this;
  }

  return EWCRownumberercell;
}(Ext_grid_cell_RowNumberer);

export { EWCRownumberercell as default };
window.customElements.define('ext-rownumberercell', ElementParser.withParsedCallback(EWCRownumberercell));