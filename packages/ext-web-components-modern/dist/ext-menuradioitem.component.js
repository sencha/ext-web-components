import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import ElementParser from './common/ElementParser.js';

var EWCMenuradioitem = /*#__PURE__*/function (_Ext_menu_RadioItem) {
  _inheritsLoose(EWCMenuradioitem, _Ext_menu_RadioItem);

  var _super = _createSuper(EWCMenuradioitem);

  function EWCMenuradioitem() {
    var _this;

    _this = _Ext_menu_RadioItem.call(this, [], []) || this;
    _this.xtype = 'menuradioitem';
    return _this;
  }

  return EWCMenuradioitem;
}(Ext_menu_RadioItem);

export { EWCMenuradioitem as default };

try {
  if (window.customElements.get('ext-menuradioitem') == undefined) {
    window.customElements.define('ext-menuradioitem', ElementParser.withParsedCallback(EWCMenuradioitem));
  }
} catch (e) {
  if (window.customElements.get('ext-menuradioitem') == undefined) {
    window.customElements.define('ext-menuradioitem', EWCMenuradioitem);
  }
}