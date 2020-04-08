import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgrid = /*#__PURE__*/function (_Mz_pivot_Table) {
  _inheritsLoose(EWCPivotgrid, _Mz_pivot_Table);

  function EWCPivotgrid() {
    var _this;

    _this = _Mz_pivot_Table.call(this, [], []) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return EWCPivotgrid;
}(Mz_pivot_Table);

export { EWCPivotgrid as default };

try {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', EWCPivotgrid);
  }
}