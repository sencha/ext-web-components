import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_toolbar_Spacer from './Ext/toolbar/Spacer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTbspacer = /*#__PURE__*/function (_Ext_toolbar_Spacer) {
  _inheritsLoose(EWCTbspacer, _Ext_toolbar_Spacer);

  var _super = _createSuper(EWCTbspacer);

  function EWCTbspacer() {
    var _this;

    _this = _Ext_toolbar_Spacer.call(this, [], []) || this;
    _this.xtype = 'tbspacer';
    return _this;
  }

  return EWCTbspacer;
}(Ext_toolbar_Spacer);

export { EWCTbspacer as default };

try {
  window.customElements.define('ext-tbspacer', ElementParser.withParsedCallback(EWCTbspacer));
} catch (e) {
  window.customElements.define('ext-tbspacer', EWCTbspacer);
}