import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_menu_ColorPicker from './Ext/menu/ColorPicker.js';
import ElementParser from './common/ElementParser.js';

var EWCColormenu = /*#__PURE__*/function (_Ext_menu_ColorPicker) {
  _inheritsLoose(EWCColormenu, _Ext_menu_ColorPicker);

  var _super = _createSuper(EWCColormenu);

  function EWCColormenu() {
    var _this;

    _this = _Ext_menu_ColorPicker.call(this, [], []) || this;
    _this.xtype = 'colormenu';
    return _this;
  }

  return EWCColormenu;
}(Ext_menu_ColorPicker);

export { EWCColormenu as default };

try {
  if (window.customElements.get('ext-colormenu') == undefined) {
    window.customElements.define('ext-colormenu', ElementParser.withParsedCallback(EWCColormenu));
  }
} catch (e) {
  if (window.customElements.get('ext-colormenu') == undefined) {
    window.customElements.define('ext-colormenu', EWCColormenu);
  }
}