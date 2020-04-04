import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './common/ElementParser.js';

var EWCCheckbox = /*#__PURE__*/function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckbox, _Ext_form_Checkbox);

  var _super = _createSuper(EWCCheckbox);

  function EWCCheckbox() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkbox';
    return _this;
  }

  return EWCCheckbox;
}(Ext_form_Checkbox);

export { EWCCheckbox as default };

try {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', ElementParser.withParsedCallback(EWCCheckbox));
  }
} catch (e) {
  if (window.customElements.get('ext-checkbox') == undefined) {
    window.customElements.define('ext-checkbox', EWCCheckbox);
  }
}