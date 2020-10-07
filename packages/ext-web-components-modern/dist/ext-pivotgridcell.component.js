import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgridcell = /*#__PURE__*/function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(EWCPivotgridcell, _Ext_pivot_cell_Cell);

  function EWCPivotgridcell() {
    var _this;

    _this = _Ext_pivot_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'pivotgridcell';
    return _this;
  }

  return EWCPivotgridcell;
}(Ext_pivot_cell_Cell);

export { EWCPivotgridcell as default };

try {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', ElementParser.withParsedCallback(EWCPivotgridcell));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', EWCPivotgridcell);
  }
}