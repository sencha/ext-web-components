import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet from './Ext/Sheet.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSheet =
/*#__PURE__*/
function (_Ext_Sheet) {
  _inheritsLoose(EWCSheet, _Ext_Sheet);

  function EWCSheet() {
    var _this;

    _this = _Ext_Sheet.call(this, [], []) || this;
    _this.xtype = 'sheet';
    return _this;
  }

  return EWCSheet;
}(Ext_Sheet);

export { EWCSheet as default };

try {
  window.customElements.define('ext-sheet', ElementParser.withParsedCallback(EWCSheet));
} catch (e) {
  window.customElements.define('ext-sheet', EWCSheet);
}