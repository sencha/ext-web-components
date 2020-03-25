import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFieldset = /*#__PURE__*/function (_Ext_form_FieldSet) {
  _inheritsLoose(EWCFieldset, _Ext_form_FieldSet);

  var _super = _createSuper(EWCFieldset);

  function EWCFieldset() {
    var _this;

    _this = _Ext_form_FieldSet.call(this, [], []) || this;
    _this.xtype = 'fieldset';
    return _this;
  }

  return EWCFieldset;
}(Ext_form_FieldSet);

export { EWCFieldset as default };

try {
  window.customElements.define('ext-fieldset', ElementParser.withParsedCallback(EWCFieldset));
} catch (e) {
  window.customElements.define('ext-fieldset', EWCFieldset);
}