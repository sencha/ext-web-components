import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtNumbercolumn =
/*#__PURE__*/
function (_Ext_grid_column_Numb) {
  _inheritsLoose(ExtNumbercolumn, _Ext_grid_column_Numb);

  function ExtNumbercolumn() {
    var _this;

    _this = _Ext_grid_column_Numb.call(this, [], []) || this;
    _this.xtype = 'numbercolumn';
    return _this;
  }

  return ExtNumbercolumn;
}(Ext_grid_column_Number);

export { ExtNumbercolumn as default };
window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(ExtNumbercolumn));