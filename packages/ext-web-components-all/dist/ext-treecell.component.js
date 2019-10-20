import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtTreecell =
/*#__PURE__*/
function (_Ext_grid_cell_Tree) {
  _inheritsLoose(ExtTreecell, _Ext_grid_cell_Tree);

  function ExtTreecell() {
    var _this;

    _this = _Ext_grid_cell_Tree.call(this, [], []) || this;
    _this.xtype = 'treecell';
    return _this;
  }

  return ExtTreecell;
}(Ext_grid_cell_Tree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treecell', ExtTreecell);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtTreecell as default };
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecell)); //export default reactify(ExtTreecell);