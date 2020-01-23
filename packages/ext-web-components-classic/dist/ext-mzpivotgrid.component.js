import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './ElementParser.js';

var EWCMzpivotgrid =
/*#__PURE__*/
function (_Mz_pivot_Table) {
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
  window.customElements.define('ext-mzpivotgrid', ElementParser.withParsedCallback(EWCMzpivotgrid));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-mzpivotgrid', EWCMzpivotgrid);
}