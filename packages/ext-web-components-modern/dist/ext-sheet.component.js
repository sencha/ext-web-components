import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Sheet from './Ext/Sheet.js';
import ElementParser from './common/ElementParser.js';

var EWCSheet = /*#__PURE__*/function (_Ext_Sheet) {
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
  if (window.customElements.get('ext-sheet') == undefined) {
    window.customElements.define('ext-sheet', ElementParser.withParsedCallback(EWCSheet));
  }
} catch (e) {
  if (window.customElements.get('ext-sheet') == undefined) {
    window.customElements.define('ext-sheet', EWCSheet);
  }
}