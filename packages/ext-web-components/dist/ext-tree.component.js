import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_Tree from './Ext/tree/Tree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreeComponent =
/*#__PURE__*/
function (_Ext_tree_Tree) {
  _inheritsLoose(ExtTreeComponent, _Ext_tree_Tree);

  function ExtTreeComponent() {
    var _this;

    _this = _Ext_tree_Tree.call(this, [], []) || this;
    _this.xtype = 'tree';
    return _this;
  }

  return ExtTreeComponent;
}(Ext_tree_Tree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tree', ExtTreeComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTreeComponent));