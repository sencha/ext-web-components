import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtBooleancolumn =
/*#__PURE__*/
function (_Ext_grid_column_Bool) {
  _inheritsLoose(ExtBooleancolumn, _Ext_grid_column_Bool);

  function ExtBooleancolumn() {
    var _this;

    _this = _Ext_grid_column_Bool.call(this, [], []) || this;
    _this.xtype = 'booleancolumn';
    return _this;
  }

  return ExtBooleancolumn;
}(Ext_grid_column_Boolean);

export { ExtBooleancolumn as default };
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(ExtBooleancolumn));