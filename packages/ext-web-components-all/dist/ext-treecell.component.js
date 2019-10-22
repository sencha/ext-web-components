import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
}(Ext_grid_cell_Tree);

export { ExtTreecell as default };
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(ExtTreecell));