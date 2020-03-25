import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_Select from './Ext/form/Select.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSelectfield = /*#__PURE__*/function (_Ext_form_Select) {
  _inheritsLoose(EWCSelectfield, _Ext_form_Select);

  var _super = _createSuper(EWCSelectfield);

  function EWCSelectfield() {
    var _this;

    _this = _Ext_form_Select.call(this, [], []) || this;
    _this.xtype = 'selectfield';
    return _this;
  }

  return EWCSelectfield;
}(Ext_form_Select);

export { EWCSelectfield as default };

try {
  window.customElements.define('ext-selectfield', ElementParser.withParsedCallback(EWCSelectfield));
} catch (e) {
  window.customElements.define('ext-selectfield', EWCSelectfield);
}