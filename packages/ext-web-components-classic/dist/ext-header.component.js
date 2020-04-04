import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './common/ElementParser.js';

var EWCHeader = /*#__PURE__*/function (_Ext_panel_Header) {
  _inheritsLoose(EWCHeader, _Ext_panel_Header);

  var _super = _createSuper(EWCHeader);

  function EWCHeader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'header';
    return _this;
  }

  return EWCHeader;
}(Ext_panel_Header);

export { EWCHeader as default };

try {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', ElementParser.withParsedCallback(EWCHeader));
  }
} catch (e) {
  if (window.customElements.get('ext-header') == undefined) {
    window.customElements.define('ext-header', EWCHeader);
  }
}