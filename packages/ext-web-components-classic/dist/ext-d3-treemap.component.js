import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_hierarchy_TreeMap from './Ext/d3/hierarchy/TreeMap.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_treemap = /*#__PURE__*/function (_Ext_d3_hierarchy_Tre) {
  _inheritsLoose(EWCD3_treemap, _Ext_d3_hierarchy_Tre);

  var _super = _createSuper(EWCD3_treemap);

  function EWCD3_treemap() {
    var _this;

    _this = _Ext_d3_hierarchy_Tre.call(this, [], []) || this;
    _this.xtype = 'd3-treemap';
    return _this;
  }

  return EWCD3_treemap;
}(Ext_d3_hierarchy_TreeMap);

export { EWCD3_treemap as default };

try {
  window.customElements.define('ext-d3-treemap', ElementParser.withParsedCallback(EWCD3_treemap));
} catch (e) {
  window.customElements.define('ext-d3-treemap', EWCD3_treemap);
}