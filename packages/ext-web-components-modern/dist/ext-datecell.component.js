import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatecell = /*#__PURE__*/function (_Ext_grid_cell_Date) {
  _inheritsLoose(EWCDatecell, _Ext_grid_cell_Date);

  function EWCDatecell() {
    var _this;

    _this = _Ext_grid_cell_Date.call(this, [], []) || this;
    _this.xtype = 'datecell';
    return _this;
  }

  return EWCDatecell;
}(Ext_grid_cell_Date);

export { EWCDatecell as default };

try {
  window.customElements.define('ext-datecell', ElementParser.withParsedCallback(EWCDatecell));
} catch (e) {
  window.customElements.define('ext-datecell', EWCDatecell);
}