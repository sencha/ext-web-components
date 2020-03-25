import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_HeatMap from './Ext/d3/HeatMap.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_heatmap = /*#__PURE__*/function (_Ext_d3_HeatMap) {
  _inheritsLoose(EWCD3_heatmap, _Ext_d3_HeatMap);

  var _super = _createSuper(EWCD3_heatmap);

  function EWCD3_heatmap() {
    var _this;

    _this = _Ext_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'd3-heatmap';
    return _this;
  }

  return EWCD3_heatmap;
}(Ext_d3_HeatMap);

export { EWCD3_heatmap as default };

try {
  window.customElements.define('ext-d3-heatmap', ElementParser.withParsedCallback(EWCD3_heatmap));
} catch (e) {
  window.customElements.define('ext-d3-heatmap', EWCD3_heatmap);
}