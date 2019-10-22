import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_Tree from './Ext/tree/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTree =
/*#__PURE__*/
function (_Ext_tree_Tree) {
  _inheritsLoose(ExtTree, _Ext_tree_Tree);

  function ExtTree() {
    var _this;

    _this = _Ext_tree_Tree.call(this, [], []) || this;
    _this.xtype = 'tree';
    return _this;
  }

  return ExtTree;
}(Ext_tree_Tree);

export { ExtTree as default };
window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTree));