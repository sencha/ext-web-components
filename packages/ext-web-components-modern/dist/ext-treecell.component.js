import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_cell_Tree from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Tree.js';
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTreecell =
/*#__PURE__*/
function (_Ext_grid_cell_Tree) {
  _inheritsLoose(EWCTreecell, _Ext_grid_cell_Tree);

  function EWCTreecell() {
    var _this;

    _this = _Ext_grid_cell_Tree.call(this, [], []) || this;
    _this.xtype = 'treecell';
    return _this;
  }

  return EWCTreecell;
}(Ext_grid_cell_Tree);

export { EWCTreecell as default };
window.customElements.define('ext-treecell', HTMLParsedElement.withParsedCallback(EWCTreecell));