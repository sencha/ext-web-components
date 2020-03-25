import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_froala_Editor from './Ext/froala/Editor.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFroalaeditor = /*#__PURE__*/function (_Ext_froala_Editor) {
  _inheritsLoose(EWCFroalaeditor, _Ext_froala_Editor);

  var _super = _createSuper(EWCFroalaeditor);

  function EWCFroalaeditor() {
    var _this;

    _this = _Ext_froala_Editor.call(this, [], []) || this;
    _this.xtype = 'froalaeditor';
    return _this;
  }

  return EWCFroalaeditor;
}(Ext_froala_Editor);

export { EWCFroalaeditor as default };

try {
  window.customElements.define('ext-froalaeditor', ElementParser.withParsedCallback(EWCFroalaeditor));
} catch (e) {
  window.customElements.define('ext-froalaeditor', EWCFroalaeditor);
}