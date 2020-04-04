import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Sheet from './Ext/Sheet.js';
import ElementParser from './common/ElementParser.js';

var EWCSheet = /*#__PURE__*/function (_Ext_Sheet) {
  _inheritsLoose(EWCSheet, _Ext_Sheet);

  var _super = _createSuper(EWCSheet);

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