import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_Tree from './Ext/tree/Tree.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTree = /*#__PURE__*/function (_Ext_tree_Tree) {
  _inheritsLoose(EWCTree, _Ext_tree_Tree);

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