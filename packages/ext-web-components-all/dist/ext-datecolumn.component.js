import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatecolumn =
/*#__PURE__*/
function (_Ext_grid_column_Date) {
  _inheritsLoose(ExtDatecolumn, _Ext_grid_column_Date);

  function ExtDatecolumn() {
    var _this;

    _this = _Ext_grid_column_Date.call(this, [], []) || this;
    _this.xtype = 'datecolumn';
    return _this;
  }

  return ExtDatecolumn;
}(Ext_grid_column_Date);

export { ExtDatecolumn as default };
window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(ExtDatecolumn));