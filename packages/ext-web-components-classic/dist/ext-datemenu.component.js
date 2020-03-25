import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_DatePicker from './Ext/menu/DatePicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDatemenu = /*#__PURE__*/function (_Ext_menu_DatePicker) {
  _inheritsLoose(EWCDatemenu, _Ext_menu_DatePicker);

  var _super = _createSuper(EWCDatemenu);

  function EWCDatemenu() {
    var _this;

    _this = _Ext_menu_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datemenu';
    return _this;
  }

  return EWCDatemenu;
}(Ext_menu_DatePicker);

export { EWCDatemenu as default };

try {
  window.customElements.define('ext-datemenu', ElementParser.withParsedCallback(EWCDatemenu));
} catch (e) {
  window.customElements.define('ext-datemenu', EWCDatemenu);
}