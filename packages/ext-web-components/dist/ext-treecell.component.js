import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree_Component from './Ext/grid/cell/Tree';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTreecellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Tree_C) {
  _inheritsLoose(ExtTreecellComponent, _Ext_grid_cell_Tree_C);

  function ExtTreecellComponent() {
    var _this;

    _this = _Ext_grid_cell_Tree_C.call(this, {}, [], []) || this;
    _this.xtype = 'treecell';
    return _this;
  }

  return ExtTreecellComponent;
}(Ext_grid_cell_Tree_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecell', ExtTreecellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecellComponent));