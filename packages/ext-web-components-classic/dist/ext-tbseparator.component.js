import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_toolbar_Separator from './Ext/toolbar/Separator.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTbseparator = /*#__PURE__*/function (_Ext_toolbar_Separato) {
  _inheritsLoose(EWCTbseparator, _Ext_toolbar_Separato);

  var _super = _createSuper(EWCTbseparator);

  function EWCTbseparator() {
    var _this;

    _this = _Ext_toolbar_Separato.call(this, [], []) || this;
    _this.xtype = 'tbseparator';
    return _this;
  }

  return EWCTbseparator;
}(Ext_toolbar_Separator);

export { EWCTbseparator as default };

try {
  window.customElements.define('ext-tbseparator', ElementParser.withParsedCallback(EWCTbseparator));
} catch (e) {
  window.customElements.define('ext-tbseparator', EWCTbseparator);
}