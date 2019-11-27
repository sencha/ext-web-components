import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Sheet from '@sencha/ext-runtime-base/dist/./Ext/Sheet.js';
import Ext_Sheet from './Ext/Sheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-sheet', HTMLParsedElement.withParsedCallback(EWCSheet));