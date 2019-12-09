import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Date from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Date.js';
import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import ElementParser from './ElementParser.js';

var EWCDatecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Date) {
  _inheritsLoose(EWCDatecolumn, _Ext_grid_column_Date);

  function EWCDatecolumn() {
    var _this;

    _this = _Ext_grid_column_Date.call(this, [], []) || this;
    _this.xtype = 'datecolumn';
    return _this;
  }

  return EWCDatecolumn;
}(Ext_grid_column_Date);

export { EWCDatecolumn as default };
window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));