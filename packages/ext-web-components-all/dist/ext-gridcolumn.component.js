import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtGridcolumn, _Ext_grid_column_Temp);

  function ExtGridcolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'gridcolumn';
    return _this;
  }

  return ExtGridcolumn;
}(Ext_grid_column_Template);

export { ExtGridcolumn as default };
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(ExtGridcolumn));