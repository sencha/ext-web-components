import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_Separator from './Ext/menu/Separator.js';
import ElementParser from './common/ElementParser.js';

var EWCMenuseparator = /*#__PURE__*/function (_Ext_menu_Separator) {
  _inheritsLoose(EWCMenuseparator, _Ext_menu_Separator);

  var _super = _createSuper(EWCMenuseparator);

  function EWCMenuseparator() {
    var _this;

    _this = _Ext_menu_Separator.call(this, [], []) || this;
    _this.xtype = 'menuseparator';
    return _this;
  }

  return EWCMenuseparator;
}(Ext_menu_Separator);

export { EWCMenuseparator as default };

try {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', ElementParser.withParsedCallback(EWCMenuseparator));
  }
} catch (e) {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', EWCMenuseparator);
  }
}