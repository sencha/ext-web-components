import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_toolbar_Item from './Ext/toolbar/Item.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTbitem = /*#__PURE__*/function (_Ext_toolbar_Item) {
  _inheritsLoose(EWCTbitem, _Ext_toolbar_Item);

  var _super = _createSuper(EWCTbitem);

  function EWCTbitem() {
    var _this;

    _this = _Ext_toolbar_Item.call(this, [], []) || this;
    _this.xtype = 'tbitem';
    return _this;
  }

  return EWCTbitem;
}(Ext_toolbar_Item);

export { EWCTbitem as default };

try {
  window.customElements.define('ext-tbitem', ElementParser.withParsedCallback(EWCTbitem));
} catch (e) {
  window.customElements.define('ext-tbitem', EWCTbitem);
}