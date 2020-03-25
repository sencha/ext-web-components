import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_field_FileButton from './Ext/field/FileButton.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFilebutton = /*#__PURE__*/function (_Ext_field_FileButton) {
  _inheritsLoose(EWCFilebutton, _Ext_field_FileButton);

  var _super = _createSuper(EWCFilebutton);

  function EWCFilebutton() {
    var _this;

    _this = _Ext_field_FileButton.call(this, [], []) || this;
    _this.xtype = 'filebutton';
    return _this;
  }

  return EWCFilebutton;
}(Ext_field_FileButton);

export { EWCFilebutton as default };

try {
  window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
} catch (e) {
  window.customElements.define('ext-filebutton', EWCFilebutton);
}