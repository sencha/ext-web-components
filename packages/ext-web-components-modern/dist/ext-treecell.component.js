import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import ElementParser from './common/ElementParser.js';

var EWCTreecell = /*#__PURE__*/function (_Ext_grid_cell_Tree) {
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

try {
  if (window.customElements.get('ext-treecell') == undefined) {
    window.customElements.define('ext-treecell', ElementParser.withParsedCallback(EWCTreecell));
  }
} catch (e) {
  if (window.customElements.get('ext-treecell') == undefined) {
    window.customElements.define('ext-treecell', EWCTreecell);
  }
}