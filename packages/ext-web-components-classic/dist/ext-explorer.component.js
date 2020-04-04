import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_Explorer from './Ext/ux/Explorer.js';
import ElementParser from './common/ElementParser.js';

var EWCExplorer = /*#__PURE__*/function (_Ext_ux_Explorer) {
  _inheritsLoose(EWCExplorer, _Ext_ux_Explorer);

  var _super = _createSuper(EWCExplorer);

  function EWCExplorer() {
    var _this;

    _this = _Ext_ux_Explorer.call(this, [], []) || this;
    _this.xtype = 'explorer';
    return _this;
  }

  return EWCExplorer;
}(Ext_ux_Explorer);

export { EWCExplorer as default };

try {
  if (window.customElements.get('ext-explorer') == undefined) {
    window.customElements.define('ext-explorer', ElementParser.withParsedCallback(EWCExplorer));
  }
} catch (e) {
  if (window.customElements.get('ext-explorer') == undefined) {
    window.customElements.define('ext-explorer', EWCExplorer);
  }
}