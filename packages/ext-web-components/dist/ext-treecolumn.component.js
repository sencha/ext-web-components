import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Tree_Component from './Ext/grid/column/Tree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Tree) {
  _inheritsLoose(ExtTreecolumnComponent, _Ext_grid_column_Tree);

  function ExtTreecolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Tree.call(this, {}, [], []) || this;
    _this.xtype = 'treecolumn';
    return _this;
  }

  return ExtTreecolumnComponent;
}(Ext_grid_column_Tree_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecolumn', ExtTreecolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(ExtTreecolumnComponent));