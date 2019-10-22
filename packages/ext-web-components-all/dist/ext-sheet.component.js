import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSheet =
/*#__PURE__*/
function (_Ext_Sheet) {
  _inheritsLoose(ExtSheet, _Ext_Sheet);

  function ExtSheet() {
    var _this;

    _this = _Ext_Sheet.call(this, [], []) || this;
    _this.xtype = 'sheet';
    return _this;
  }

  return ExtSheet;
}(Ext_Sheet);

export { ExtSheet as default };
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(ExtSheet));