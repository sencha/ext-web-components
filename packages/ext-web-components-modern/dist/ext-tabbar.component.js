import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_TabBar from './Ext/TabBar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTabbar = /*#__PURE__*/function (_Ext_TabBar) {
  _inheritsLoose(EWCTabbar, _Ext_TabBar);

  var _super = _createSuper(EWCTabbar);

  function EWCTabbar() {
    var _this;

    _this = _Ext_TabBar.call(this, [], []) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return EWCTabbar;
}(Ext_TabBar);

export { EWCTabbar as default };

try {
  window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
} catch (e) {
  window.customElements.define('ext-tabbar', EWCTabbar);
}