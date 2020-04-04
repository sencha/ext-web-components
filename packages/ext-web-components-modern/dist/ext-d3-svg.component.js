import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import ElementParser from './common/ElementParser.js';

var EWCD3_svg = /*#__PURE__*/function (_Ext_d3_svg_Svg) {
  _inheritsLoose(EWCD3_svg, _Ext_d3_svg_Svg);

  var _super = _createSuper(EWCD3_svg);

  function EWCD3_svg() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3-svg';
    return _this;
  }

  return EWCD3_svg;
}(Ext_d3_svg_Svg);

export { EWCD3_svg as default };

try {
  if (window.customElements.get('ext-d3-svg') == undefined) {
    window.customElements.define('ext-d3-svg', ElementParser.withParsedCallback(EWCD3_svg));
  }
} catch (e) {
  if (window.customElements.get('ext-d3-svg') == undefined) {
    window.customElements.define('ext-d3-svg', EWCD3_svg);
  }
}