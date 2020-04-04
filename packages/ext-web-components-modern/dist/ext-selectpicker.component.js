import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_picker_SelectPicker from './Ext/picker/SelectPicker.js';
import ElementParser from './common/ElementParser.js';

var EWCSelectpicker = /*#__PURE__*/function (_Ext_picker_SelectPic) {
  _inheritsLoose(EWCSelectpicker, _Ext_picker_SelectPic);

  var _super = _createSuper(EWCSelectpicker);

  function EWCSelectpicker() {
    var _this;

    _this = _Ext_picker_SelectPic.call(this, [], []) || this;
    _this.xtype = 'selectpicker';
    return _this;
  }

  return EWCSelectpicker;
}(Ext_picker_SelectPicker);

export { EWCSelectpicker as default };

try {
  if (window.customElements.get('ext-selectpicker') == undefined) {
    window.customElements.define('ext-selectpicker', ElementParser.withParsedCallback(EWCSelectpicker));
  }
} catch (e) {
  if (window.customElements.get('ext-selectpicker') == undefined) {
    window.customElements.define('ext-selectpicker', EWCSelectpicker);
  }
}