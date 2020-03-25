import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCForm = /*#__PURE__*/function (_Ext_form_FormPanel) {
  _inheritsLoose(EWCForm, _Ext_form_FormPanel);

  var _super = _createSuper(EWCForm);

  function EWCForm() {
    var _this;

    _this = _Ext_form_FormPanel.call(this, [], []) || this;
    _this.xtype = 'form';
    return _this;
  }

  return EWCForm;
}(Ext_form_FormPanel);

export { EWCForm as default };

try {
  window.customElements.define('ext-form', ElementParser.withParsedCallback(EWCForm));
} catch (e) {
  window.customElements.define('ext-form', EWCForm);
}