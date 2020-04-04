import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_Bar from './Ext/menu/Bar.js';
import ElementParser from './common/ElementParser.js';

var EWCMenubar = /*#__PURE__*/function (_Ext_menu_Bar) {
  _inheritsLoose(EWCMenubar, _Ext_menu_Bar);

  var _super = _createSuper(EWCMenubar);

  function EWCMenubar() {
    var _this;

    _this = _Ext_menu_Bar.call(this, [], []) || this;
    _this.xtype = 'menubar';
    return _this;
  }

  return EWCMenubar;
}(Ext_menu_Bar);

export { EWCMenubar as default };

try {
  if (window.customElements.get('ext-menubar') == undefined) {
    window.customElements.define('ext-menubar', ElementParser.withParsedCallback(EWCMenubar));
  }
} catch (e) {
  if (window.customElements.get('ext-menubar') == undefined) {
    window.customElements.define('ext-menubar', EWCMenubar);
  }
}