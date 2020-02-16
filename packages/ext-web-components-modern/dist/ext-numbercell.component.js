import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNumbercell =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(EWCNumbercell, _Ext_grid_cell_Number);

  function EWCNumbercell() {
    var _this;

    _this = _Ext_grid_cell_Number.call(this, [], []) || this;
    _this.xtype = 'numbercell';
    return _this;
  }

  return EWCNumbercell;
}(Ext_grid_cell_Number);

export { EWCNumbercell as default };

try {
  window.customElements.define('ext-numbercell', ElementParser.withParsedCallback(EWCNumbercell));
} catch (e) {
  window.customElements.define('ext-numbercell', EWCNumbercell);
}