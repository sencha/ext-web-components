import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import ElementParser from './common/ElementParser.js';

var EWCD3 = /*#__PURE__*/function (_Ext_d3_svg_Svg) {
  _inheritsLoose(EWCD3, _Ext_d3_svg_Svg);

  var _super = _createSuper(EWCD3);

  function EWCD3() {
    var _this;

    _this = _Ext_d3_svg_Svg.call(this, [], []) || this;
    _this.xtype = 'd3';
    return _this;
  }

  return EWCD3;
}(Ext_d3_svg_Svg);

export { EWCD3 as default };

try {
  if (window.customElements.get('ext-d3') == undefined) {
    window.customElements.define('ext-d3', ElementParser.withParsedCallback(EWCD3));
  }
} catch (e) {
  if (window.customElements.get('ext-d3') == undefined) {
    window.customElements.define('ext-d3', EWCD3);
  }
}