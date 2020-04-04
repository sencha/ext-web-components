import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ToolTip from './Ext/ToolTip.js';
import ElementParser from './common/ElementParser.js';

var EWCTooltip = /*#__PURE__*/function (_Ext_ToolTip) {
  _inheritsLoose(EWCTooltip, _Ext_ToolTip);

  var _super = _createSuper(EWCTooltip);

  function EWCTooltip() {
    var _this;

    _this = _Ext_ToolTip.call(this, [], []) || this;
    _this.xtype = 'tooltip';
    return _this;
  }

  return EWCTooltip;
}(Ext_ToolTip);

export { EWCTooltip as default };

try {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', ElementParser.withParsedCallback(EWCTooltip));
  }
} catch (e) {
  if (window.customElements.get('ext-tooltip') == undefined) {
    window.customElements.define('ext-tooltip', EWCTooltip);
  }
}