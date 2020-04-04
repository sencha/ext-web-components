import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_canvas_Canvas from './Ext/d3/canvas/Canvas.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_canvas = /*#__PURE__*/function (_Ext_d3_canvas_Canvas) {
  _inheritsLoose(EWCD3_canvas, _Ext_d3_canvas_Canvas);

  var _super = _createSuper(EWCD3_canvas);

  function EWCD3_canvas() {
    var _this;

    _this = _Ext_d3_canvas_Canvas.call(this, [], []) || this;
    _this.xtype = 'd3-canvas';
    return _this;
  }

  return EWCD3_canvas;
}(Ext_d3_canvas_Canvas);

export { EWCD3_canvas as default };

try {
  if (window.customElements.get('ext-d3-canvas') == undefined) {
    window.customElements.define('ext-d3-canvas', ElementParser.withParsedCallback(EWCD3_canvas));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-canvas') == undefined) {
    window.customElements.define('ext-d3-canvas', EWCD3_canvas);
  }
}