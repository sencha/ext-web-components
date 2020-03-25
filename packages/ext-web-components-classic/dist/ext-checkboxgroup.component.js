import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_CheckboxGroup from './Ext/form/CheckboxGroup.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCheckboxgroup = /*#__PURE__*/function (_Ext_form_CheckboxGro) {
  _inheritsLoose(EWCCheckboxgroup, _Ext_form_CheckboxGro);

  var _super = _createSuper(EWCCheckboxgroup);

  function EWCCheckboxgroup() {
    var _this;

    _this = _Ext_form_CheckboxGro.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return EWCCheckboxgroup;
}(Ext_form_CheckboxGroup);

export { EWCCheckboxgroup as default };

try {
  window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
} catch (e) {
  window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
}