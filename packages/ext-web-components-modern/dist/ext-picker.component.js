import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Picker from './Ext/Picker.js';
import ElementParser from './common/ElementParser.js';

var EWCPicker = /*#__PURE__*/function (_Ext_Picker) {
  _inheritsLoose(EWCPicker, _Ext_Picker);

  var _super = _createSuper(EWCPicker);

  function EWCPicker() {
    var _this;

    _this = _Ext_Picker.call(this, [], []) || this;
    _this.xtype = 'picker';
    return _this;
  }

  return EWCPicker;
}(Ext_Picker);

export { EWCPicker as default };

try {
  if (window.customElements.get('ext-picker') == undefined) {
    window.customElements.define('ext-picker', ElementParser.withParsedCallback(EWCPicker));
  }
} catch (e) {
  if (window.customElements.get('ext-picker') == undefined) {
    window.customElements.define('ext-picker', EWCPicker);
  }
}