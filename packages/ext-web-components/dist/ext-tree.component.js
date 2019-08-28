import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_Tree_Component from './Ext/tree/Tree';
export var ExtTreeComponent =
/*#__PURE__*/
function (_Ext_tree_Tree_Compon) {
  _inheritsLoose(ExtTreeComponent, _Ext_tree_Tree_Compon);

  function ExtTreeComponent() {
    return _Ext_tree_Tree_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtTreeComponent;
}(Ext_tree_Tree_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tree', ExtTreeComponent);
  });
})();