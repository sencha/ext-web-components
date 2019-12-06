import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_cell_RowNumberer from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/RowNumberer.js';
import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(EWCRownumberercell));