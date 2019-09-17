import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tree_Tree_Component from './Ext/tree/Tree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreeComponent =
/*#__PURE__*/
function (_Ext_tree_Tree_Compon) {
  _inheritsLoose(ExtTreeComponent, _Ext_tree_Tree_Compon);

  function ExtTreeComponent() {
    var _this;

    _this = _Ext_tree_Tree_Compon.call(this) || this;
    _this.xtype = 'tree';
    return _this;
  }

  return ExtTreeComponent;
}(Ext_tree_Tree_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tree', ExtTreeComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tree', HTMLParsedElement.withParsedCallback(ExtTreeComponent));