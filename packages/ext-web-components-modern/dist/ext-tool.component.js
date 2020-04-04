import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './common/ElementParser.js';

var EWCTool = /*#__PURE__*/function (_Ext_panel_Tool) {
  _inheritsLoose(EWCTool, _Ext_panel_Tool);

  var _super = _createSuper(EWCTool);

  function EWCTool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'tool';
    return _this;
  }

  return EWCTool;
}(Ext_panel_Tool);

export { EWCTool as default };

try {
  if (window.customElements.get('ext-tool') == undefined) {
    window.customElements.define('ext-tool', ElementParser.withParsedCallback(EWCTool));
  }
} catch (e) {
  if (window.customElements.get('ext-tool') == undefined) {
    window.customElements.define('ext-tool', EWCTool);
  }
}