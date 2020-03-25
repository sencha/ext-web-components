import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_tree_Tree from './Ext/tree/Tree.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTree = /*#__PURE__*/function (_Ext_tree_Tree) {
  _inheritsLoose(EWCTree, _Ext_tree_Tree);

  var _super = _createSuper(EWCTree);

  function EWCTree() {
    var _this;

    _this = _Ext_tree_Tree.call(this, [], []) || this;
    _this.xtype = 'tree';
    return _this;
  }

  return EWCTree;
}(Ext_tree_Tree);

export { EWCTree as default };

try {
  window.customElements.define('ext-tree', ElementParser.withParsedCallback(EWCTree));
} catch (e) {
  window.customElements.define('ext-tree', EWCTree);
}