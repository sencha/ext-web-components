import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_hierarchy_tree_HorizontalTree from './Ext/d3/hierarchy/tree/HorizontalTree.js';
import ElementParser from './runtime/ElementParser.js';

var EWCD3_tree = /*#__PURE__*/function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(EWCD3_tree, _Ext_d3_hierarchy_tre);

  var _super = _createSuper(EWCD3_tree);

  function EWCD3_tree() {
    var _this;

    _this = _Ext_d3_hierarchy_tre.call(this, [], []) || this;
    _this.xtype = 'd3-tree';
    return _this;
  }

  return EWCD3_tree;
}(Ext_d3_hierarchy_tree_HorizontalTree);

export { EWCD3_tree as default };

try {
  window.customElements.define('ext-d3-tree', ElementParser.withParsedCallback(EWCD3_tree));
} catch (e) {
  window.customElements.define('ext-d3-tree', EWCD3_tree);
}