import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_draw_Surface from './Ext/draw/Surface.js';
import ElementParser from './common/ElementParser.js';

var EWCSurface = /*#__PURE__*/function (_Ext_draw_Surface) {
  _inheritsLoose(EWCSurface, _Ext_draw_Surface);

  var _super = _createSuper(EWCSurface);

  function EWCSurface() {
    var _this;

    _this = _Ext_draw_Surface.call(this, [], []) || this;
    _this.xtype = 'surface';
    return _this;
  }

  return EWCSurface;
}(Ext_draw_Surface);

export { EWCSurface as default };

try {
  if (window.customElements.get('ext-surface') == undefined) {
    window.customElements.define('ext-surface', ElementParser.withParsedCallback(EWCSurface));
  }
} catch (e) {
  if (window.customElements.get('ext-surface') == undefined) {
    window.customElements.define('ext-surface', EWCSurface);
  }
}