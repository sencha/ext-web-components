import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_CheckboxGroup from './Ext/field/CheckboxGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCCheckboxgroup = /*#__PURE__*/function (_Ext_field_CheckboxGr) {
  _inheritsLoose(EWCCheckboxgroup, _Ext_field_CheckboxGr);

  var _super = _createSuper(EWCCheckboxgroup);

  function EWCCheckboxgroup() {
    var _this;

    _this = _Ext_field_CheckboxGr.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return EWCCheckboxgroup;
}(Ext_field_CheckboxGroup);

export { EWCCheckboxgroup as default };

try {
  if (window.customElements.get('ext-checkboxgroup') == undefined) {
    window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
  }
} catch (e) {
  if (window.customElements.get('ext-checkboxgroup') == undefined) {
    window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
  }
}