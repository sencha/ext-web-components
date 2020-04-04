import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_File from './Ext/form/File.js';
import ElementParser from './common/ElementParser.js';

var EWCFileuploadfield = /*#__PURE__*/function (_Ext_form_File) {
  _inheritsLoose(EWCFileuploadfield, _Ext_form_File);

  var _super = _createSuper(EWCFileuploadfield);

  function EWCFileuploadfield() {
    var _this;

    _this = _Ext_form_File.call(this, [], []) || this;
    _this.xtype = 'fileuploadfield';
    return _this;
  }

  return EWCFileuploadfield;
}(Ext_form_File);

export { EWCFileuploadfield as default };

try {
  if (window.customElements.get('ext-fileuploadfield') == undefined) {
    window.customElements.define('ext-fileuploadfield', ElementParser.withParsedCallback(EWCFileuploadfield));
  }
} catch (e) {
  if (window.customElements.get('ext-fileuploadfield') == undefined) {
    window.customElements.define('ext-fileuploadfield', EWCFileuploadfield);
  }
}