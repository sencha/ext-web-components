import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Text from './Ext/form/Text.js';
import ElementParser from './common/ElementParser.js';

var EWCTextfield = /*#__PURE__*/function (_Ext_form_Text) {
  _inheritsLoose(EWCTextfield, _Ext_form_Text);

  var _super = _createSuper(EWCTextfield);

  function EWCTextfield() {
    var _this;

    _this = _Ext_form_Text.call(this, [], []) || this;
    _this.xtype = 'textfield';
    return _this;
  }

  return EWCTextfield;
}(Ext_form_Text);

export { EWCTextfield as default };

try {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', ElementParser.withParsedCallback(EWCTextfield));
  }
} catch (e) {
  if (window.customElements.get('ext-textfield') == undefined) {
    window.customElements.define('ext-textfield', EWCTextfield);
  }
}