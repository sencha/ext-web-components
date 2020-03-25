import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTagfield = /*#__PURE__*/function (_Ext_form_field_Tag) {
  _inheritsLoose(EWCTagfield, _Ext_form_field_Tag);

  var _super = _createSuper(EWCTagfield);

  function EWCTagfield() {
    var _this;

    _this = _Ext_form_field_Tag.call(this, [], []) || this;
    _this.xtype = 'tagfield';
    return _this;
  }

  return EWCTagfield;
}(Ext_form_field_Tag);

export { EWCTagfield as default };

try {
  window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));
} catch (e) {
  window.customElements.define('ext-tagfield', EWCTagfield);
}