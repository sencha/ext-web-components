import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_StatusBar from './Ext/ux/StatusBar.js';
import ElementParser from './common/ElementParser.js';

var EWCStatusbar = /*#__PURE__*/function (_Ext_ux_StatusBar) {
  _inheritsLoose(EWCStatusbar, _Ext_ux_StatusBar);

  var _super = _createSuper(EWCStatusbar);

  function EWCStatusbar() {
    var _this;

    _this = _Ext_ux_StatusBar.call(this, [], []) || this;
    _this.xtype = 'statusbar';
    return _this;
  }

  return EWCStatusbar;
}(Ext_ux_StatusBar);

export { EWCStatusbar as default };

try {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', ElementParser.withParsedCallback(EWCStatusbar));
  }
} catch (e) {
  if (window.customElements.get('ext-statusbar') == undefined) {
    window.customElements.define('ext-statusbar', EWCStatusbar);
  }
}