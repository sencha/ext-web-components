import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNumbercolumn =
/*#__PURE__*/
function (_Ext_grid_column_Numb) {
  _inheritsLoose(EWCNumbercolumn, _Ext_grid_column_Numb);

  function EWCNumbercolumn() {
    var _this;

    _this = _Ext_grid_column_Numb.call(this, [], []) || this;
    _this.xtype = 'numbercolumn';
    return _this;
  }

  return EWCNumbercolumn;
}(Ext_grid_column_Number);

export { EWCNumbercolumn as default };

try {
  window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
} catch (e) {
  window.customElements.define('ext-numbercolumn', EWCNumbercolumn);
}