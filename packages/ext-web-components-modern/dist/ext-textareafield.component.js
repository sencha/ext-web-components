import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_form_TextArea from './Ext/form/TextArea.js';
import ElementParser from './common/ElementParser.js';

var EWCTextareafield = /*#__PURE__*/function (_Ext_form_TextArea) {
  _inheritsLoose(EWCTextareafield, _Ext_form_TextArea);

  var _super = _createSuper(EWCTextareafield);

  function EWCTextareafield() {
    var _this;

    _this = _Ext_form_TextArea.call(this, [], []) || this;
    _this.xtype = 'textareafield';
    return _this;
  }

  return EWCTextareafield;
}(Ext_form_TextArea);

export { EWCTextareafield as default };

try {
  if (window.customElements.get('ext-textareafield') == undefined) {
    window.customElements.define('ext-textareafield', ElementParser.withParsedCallback(EWCTextareafield));
  }
} catch (e) {
  if (window.customElements.get('ext-textareafield') == undefined) {
    window.customElements.define('ext-textareafield', EWCTextareafield);
  }
}