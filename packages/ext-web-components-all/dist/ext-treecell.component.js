import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTreecellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Tree) {
  _inheritsLoose(ExtTreecellComponent, _Ext_grid_cell_Tree);

  function ExtTreecellComponent() {
    var _this;

    _this = _Ext_grid_cell_Tree.call(this, [], []) || this;
    _this.xtype = 'treecell';
    return _this;
  }

  return ExtTreecellComponent;
}(Ext_grid_cell_Tree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecell', ExtTreecellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecellComponent));