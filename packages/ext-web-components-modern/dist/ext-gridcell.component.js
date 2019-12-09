import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_cell_Cell from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Cell.js';
import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import ElementParser from './ElementParser.js';

var EWCGridcell =
/*#__PURE__*/
function (_Ext_grid_cell_Cell) {
  _inheritsLoose(EWCGridcell, _Ext_grid_cell_Cell);

  function EWCGridcell() {
    var _this;

    _this = _Ext_grid_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'gridcell';
    return _this;
  }

  return EWCGridcell;
}(Ext_grid_cell_Cell);

export { EWCGridcell as default };
window.customElements.define('ext-gridcell', ElementParser.withParsedCallback(EWCGridcell));