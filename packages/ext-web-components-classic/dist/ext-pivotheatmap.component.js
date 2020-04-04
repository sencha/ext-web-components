import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_d3_HeatMap from './Ext/pivot/d3/HeatMap.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotheatmap = /*#__PURE__*/function (_Ext_pivot_d3_HeatMap) {
  _inheritsLoose(EWCPivotheatmap, _Ext_pivot_d3_HeatMap);

  var _super = _createSuper(EWCPivotheatmap);

  function EWCPivotheatmap() {
    var _this;

    _this = _Ext_pivot_d3_HeatMap.call(this, [], []) || this;
    _this.xtype = 'pivotheatmap';
    return _this;
  }

  return EWCPivotheatmap;
}(Ext_pivot_d3_HeatMap);

export { EWCPivotheatmap as default };

try {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', ElementParser.withParsedCallback(EWCPivotheatmap));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotheatmap') == undefined) {
    window.customElements.define('ext-pivotheatmap', EWCPivotheatmap);
  }
}