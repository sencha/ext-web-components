import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Editor from './Ext/Editor.js';
import ElementParser from './common/ElementParser.js';

var EWCEditor = /*#__PURE__*/function (_Ext_Editor) {
  _inheritsLoose(EWCEditor, _Ext_Editor);

  var _super = _createSuper(EWCEditor);

  function EWCEditor() {
    var _this;

    _this = _Ext_Editor.call(this, [], []) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return EWCEditor;
}(Ext_Editor);

export { EWCEditor as default };

try {
  if (window.customElements.get('ext-editor') == undefined) {
    window.customElements.define('ext-editor', ElementParser.withParsedCallback(EWCEditor));
  }
} catch (e) {
  if (window.customElements.get('ext-editor') == undefined) {
    window.customElements.define('ext-editor', EWCEditor);
  }
}