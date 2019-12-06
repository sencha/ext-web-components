import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_column_Boolean from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Boolean.js';
import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(EWCBooleancolumn));