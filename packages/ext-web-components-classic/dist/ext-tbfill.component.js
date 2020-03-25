import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_toolbar_Fill from './Ext/toolbar/Fill.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTbfill = /*#__PURE__*/function (_Ext_toolbar_Fill) {
  _inheritsLoose(EWCTbfill, _Ext_toolbar_Fill);

  var _super = _createSuper(EWCTbfill);

  function EWCTbfill() {
    var _this;

    _this = _Ext_toolbar_Fill.call(this, [], []) || this;
    _this.xtype = 'tbfill';
    return _this;
  }

  return EWCTbfill;
}(Ext_toolbar_Fill);

export { EWCTbfill as default };

try {
  window.customElements.define('ext-tbfill', ElementParser.withParsedCallback(EWCTbfill));
} catch (e) {
  window.customElements.define('ext-tbfill', EWCTbfill);
}