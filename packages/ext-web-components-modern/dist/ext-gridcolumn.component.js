import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Template from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Template.js';
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGridcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCGridcolumn, _Ext_grid_column_Temp);

  function EWCGridcolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'gridcolumn';
    return _this;
  }

  return EWCGridcolumn;
}(Ext_grid_column_Template);

export { EWCGridcolumn as default };
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(EWCGridcolumn));