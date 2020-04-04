import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Header from './Ext/panel/Header.js';
import ElementParser from './common/ElementParser.js';

var EWCPanelheader = /*#__PURE__*/function (_Ext_panel_Header) {
  _inheritsLoose(EWCPanelheader, _Ext_panel_Header);

  var _super = _createSuper(EWCPanelheader);

  function EWCPanelheader() {
    var _this;

    _this = _Ext_panel_Header.call(this, [], []) || this;
    _this.xtype = 'panelheader';
    return _this;
  }

  return EWCPanelheader;
}(Ext_panel_Header);

export { EWCPanelheader as default };

try {
  if (window.customElements.get('ext-panelheader') == undefined) {
    window.customElements.define('ext-panelheader', ElementParser.withParsedCallback(EWCPanelheader));
  }
} catch (e) {
  if (window.customElements.get('ext-panelheader') == undefined) {
    window.customElements.define('ext-panelheader', EWCPanelheader);
  }
}