import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import ElementParser from './ElementParser.js';

var EWCBooleancolumn =
/*#__PURE__*/
function (_Ext_grid_column_Bool) {
  _inheritsLoose(EWCBooleancolumn, _Ext_grid_column_Bool);

  function EWCBooleancolumn() {
    var _this;

    _this = _Ext_grid_column_Bool.call(this, [], []) || this;
    _this.xtype = 'booleancolumn';
    return _this;
  }

  return EWCBooleancolumn;
}(Ext_grid_column_Boolean);

export { EWCBooleancolumn as default };

try {
  window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
} catch (e) {
  window.customElements.define('ext-booleancolumn', EWCBooleancolumn);
}