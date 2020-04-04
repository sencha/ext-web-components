import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Indicator from './Ext/Indicator.js';
import ElementParser from './common/ElementParser.js';

var EWCIndicator = /*#__PURE__*/function (_Ext_Indicator) {
  _inheritsLoose(EWCIndicator, _Ext_Indicator);

  var _super = _createSuper(EWCIndicator);

  function EWCIndicator() {
    var _this;

    _this = _Ext_Indicator.call(this, [], []) || this;
    _this.xtype = 'indicator';
    return _this;
  }

  return EWCIndicator;
}(Ext_Indicator);

export { EWCIndicator as default };

try {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', ElementParser.withParsedCallback(EWCIndicator));
  }
} catch (e) {
  if (window.customElements.get('ext-indicator') == undefined) {
    window.customElements.define('ext-indicator', EWCIndicator);
  }
}