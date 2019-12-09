import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Selection from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Selection.js';
import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import ElementParser from './ElementParser.js';

var EWCSelectioncolumn =
/*#__PURE__*/
function (_Ext_grid_column_Sele) {
  _inheritsLoose(EWCSelectioncolumn, _Ext_grid_column_Sele);

  function EWCSelectioncolumn() {
    var _this;

    _this = _Ext_grid_column_Sele.call(this, [], []) || this;
    _this.xtype = 'selectioncolumn';
    return _this;
  }

  return EWCSelectioncolumn;
}(Ext_grid_column_Selection);

export { EWCSelectioncolumn as default };
window.customElements.define('ext-selectioncolumn', ElementParser.withParsedCallback(EWCSelectioncolumn));