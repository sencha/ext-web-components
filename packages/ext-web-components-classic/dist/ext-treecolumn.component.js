import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_tree_Column from '@sencha/ext-runtime-base/dist/./Ext/tree/Column.js';
import Ext_tree_Column from './Ext/tree/Column.js';
import ElementParser from './ElementParser.js';

var EWCTreecolumn =
/*#__PURE__*/
function (_Ext_tree_Column) {
  _inheritsLoose(EWCTreecolumn, _Ext_tree_Column);

  function EWCTreecolumn() {
    var _this;

    _this = _Ext_tree_Column.call(this, [], []) || this;
    _this.xtype = 'treecolumn';
    return _this;
  }

  return EWCTreecolumn;
}(Ext_tree_Column);

export { EWCTreecolumn as default };
window.customElements.define('ext-treecolumn', ElementParser.withParsedCallback(EWCTreecolumn));