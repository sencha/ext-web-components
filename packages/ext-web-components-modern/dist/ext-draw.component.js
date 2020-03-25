import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_draw_Component from './Ext/draw/Component.js';
import ElementParser from './runtime/ElementParser.js';

var EWCDraw = /*#__PURE__*/function (_Ext_draw_Component) {
  _inheritsLoose(EWCDraw, _Ext_draw_Component);

  var _super = _createSuper(EWCDraw);

  function EWCDraw() {
    var _this;

    _this = _Ext_draw_Component.call(this, [], []) || this;
    _this.xtype = 'draw';
    return _this;
  }

  return EWCDraw;
}(Ext_draw_Component);

export { EWCDraw as default };

try {
  window.customElements.define('ext-draw', ElementParser.withParsedCallback(EWCDraw));
} catch (e) {
  window.customElements.define('ext-draw', EWCDraw);
}