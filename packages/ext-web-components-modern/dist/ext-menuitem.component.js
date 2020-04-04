import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import ElementParser from './common/ElementParser.js';

var EWCMenuitem = /*#__PURE__*/function (_Ext_menu_TextItem) {
  _inheritsLoose(EWCMenuitem, _Ext_menu_TextItem);

  var _super = _createSuper(EWCMenuitem);

  function EWCMenuitem() {
    var _this;

    _this = _Ext_menu_TextItem.call(this, [], []) || this;
    _this.xtype = 'menuitem';
    return _this;
  }

  return EWCMenuitem;
}(Ext_menu_TextItem);

export { EWCMenuitem as default };

try {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', ElementParser.withParsedCallback(EWCMenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', EWCMenuitem);
  }
}