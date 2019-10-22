import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtTreecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Tree) {
  _inheritsLoose(ExtTreecolumn, _Ext_grid_column_Tree);

  function ExtTreecolumn() {
    var _this;

    _this = _Ext_grid_column_Tree.call(this, [], []) || this;
    _this.xtype = 'treecolumn';
    return _this;
  }

  return ExtTreecolumn;
}(Ext_grid_column_Tree);

export { ExtTreecolumn as default };
window.customElements.define('ext-treecolumn', HTMLParsedElement.withParsedCallback(ExtTreecolumn));