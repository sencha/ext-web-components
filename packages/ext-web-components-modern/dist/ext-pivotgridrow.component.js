import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_Row from './Ext/pivot/Row.js';
import ElementParser from './ElementParser.js';

var EWCPivotgridrow =
/*#__PURE__*/
function (_Ext_pivot_Row) {
  _inheritsLoose(EWCPivotgridrow, _Ext_pivot_Row);

  function EWCPivotgridrow() {
    var _this;

    _this = _Ext_pivot_Row.call(this, [], []) || this;
    _this.xtype = 'pivotgridrow';
    return _this;
  }

  return EWCPivotgridrow;
}(Ext_pivot_Row);

export { EWCPivotgridrow as default };

try {
  window.customElements.define('ext-pivotgridrow', ElementParser.withParsedCallback(EWCPivotgridrow));
} catch (e) {
  window.customElements.define('ext-pivotgridrow', EWCPivotgridrow);
}