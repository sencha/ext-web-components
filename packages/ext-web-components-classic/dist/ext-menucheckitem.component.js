import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMenucheckitem = /*#__PURE__*/function (_Ext_menu_CheckItem) {
  _inheritsLoose(EWCMenucheckitem, _Ext_menu_CheckItem);

  var _super = _createSuper(EWCMenucheckitem);

  function EWCMenucheckitem() {
    var _this;

    _this = _Ext_menu_CheckItem.call(this, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return EWCMenucheckitem;
}(Ext_menu_CheckItem);

export { EWCMenucheckitem as default };

try {
  window.customElements.define('ext-menucheckitem', ElementParser.withParsedCallback(EWCMenucheckitem));
} catch (e) {
  window.customElements.define('ext-menucheckitem', EWCMenucheckitem);
}