import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_File from './Ext/field/File.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFilefield = /*#__PURE__*/function (_Ext_field_File) {
  _inheritsLoose(EWCFilefield, _Ext_field_File);

  var _super = _createSuper(EWCFilefield);

  function EWCFilefield() {
    var _this;

    _this = _Ext_field_File.call(this, [], []) || this;
    _this.xtype = 'filefield';
    return _this;
  }

  return EWCFilefield;
}(Ext_field_File);

export { EWCFilefield as default };

try {
  window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));
} catch (e) {
  window.customElements.define('ext-filefield', EWCFilefield);
}