import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './common/ElementParser.js';

var EWCMzpivotgrid = /*#__PURE__*/function (_Mz_pivot_Table) {
  _inheritsLoose(EWCMzpivotgrid, _Mz_pivot_Table);

  function EWCMzpivotgrid() {
    var _this;

    _this = _Mz_pivot_Table.call(this, [], []) || this;
    _this.xtype = 'mzpivotgrid';
    return _this;
  }

  return EWCMzpivotgrid;
}(Mz_pivot_Table);

export { EWCMzpivotgrid as default };

try {
  if (window.customElements.get('ext-mzpivotgrid') == undefined) {
    window.customElements.define('ext-mzpivotgrid', ElementParser.withParsedCallback(EWCMzpivotgrid));
  }
} catch (e) {
  if (window.customElements.get('ext-mzpivotgrid') == undefined) {
    window.customElements.define('ext-mzpivotgrid', EWCMzpivotgrid);
  }
}