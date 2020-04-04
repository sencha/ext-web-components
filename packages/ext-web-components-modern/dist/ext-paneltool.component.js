import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './common/ElementParser.js';

var EWCPaneltool = /*#__PURE__*/function (_Ext_panel_Tool) {
  _inheritsLoose(EWCPaneltool, _Ext_panel_Tool);

  var _super = _createSuper(EWCPaneltool);

  function EWCPaneltool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'paneltool';
    return _this;
  }

  return EWCPaneltool;
}(Ext_panel_Tool);

export { EWCPaneltool as default };

try {
  if (window.customElements.get('ext-paneltool') == undefined) {
    window.customElements.define('ext-paneltool', ElementParser.withParsedCallback(EWCPaneltool));
  }
} catch (e) {
  if (window.customElements.get('ext-paneltool') == undefined) {
    window.customElements.define('ext-paneltool', EWCPaneltool);
  }
}