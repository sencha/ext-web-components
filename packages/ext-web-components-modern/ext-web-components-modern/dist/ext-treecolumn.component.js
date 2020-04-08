import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Tree from './Ext/grid/column/Tree.js';
import ElementParser from './common/ElementParser.js';

var EWCTreecolumn = /*#__PURE__*/function (_Ext_grid_column_Tree) {
  _inheritsLoose(EWCTreecolumn, _Ext_grid_column_Tree);

  function EWCTreecolumn() {
    var _this;

    _this = _Ext_grid_column_Tree.call(this, [], []) || this;
    _this.xtype = 'treecolumn';
    return _this;
  }

  return EWCTreecolumn;
}(Ext_grid_column_Tree);

export { EWCTreecolumn as default };

try {
  if (window.customElements.get('ext-treecolumn') == undefined) {
    window.customElements.define('ext-treecolumn', ElementParser.withParsedCallback(EWCTreecolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-treecolumn') == undefined) {
    window.customElements.define('ext-treecolumn', EWCTreecolumn);
  }
}