import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_pivot_Row from '@sencha/ext-runtime-base/dist/./Ext/pivot/Row.js';
import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(EWCPivotgridrow));