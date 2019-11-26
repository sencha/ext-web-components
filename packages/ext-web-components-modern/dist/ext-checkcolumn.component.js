import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Check from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Check.js';
import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCheckcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Chec) {
  _inheritsLoose(EWCCheckcolumn, _Ext_grid_column_Chec);

  function EWCCheckcolumn() {
    var _this;

    _this = _Ext_grid_column_Chec.call(this, [], []) || this;
    _this.xtype = 'checkcolumn';
    return _this;
  }

  return EWCCheckcolumn;
}(Ext_grid_column_Check);

export { EWCCheckcolumn as default };
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(EWCCheckcolumn));