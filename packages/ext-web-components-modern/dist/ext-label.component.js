import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Label from './Ext/Label.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLabel = /*#__PURE__*/function (_Ext_Label) {
  _inheritsLoose(EWCLabel, _Ext_Label);

  var _super = _createSuper(EWCLabel);

  function EWCLabel() {
    var _this;

    _this = _Ext_Label.call(this, [], []) || this;
    _this.xtype = 'label';
    return _this;
  }

  return EWCLabel;
}(Ext_Label);

export { EWCLabel as default };

try {
  window.customElements.define('ext-label', ElementParser.withParsedCallback(EWCLabel));
} catch (e) {
  window.customElements.define('ext-label', EWCLabel);
}