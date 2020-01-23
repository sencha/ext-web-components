import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './ElementParser.js';

var EWCColumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCColumn, _Ext_grid_column_Temp);

  function EWCColumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'column';
    return _this;
  }

  return EWCColumn;
}(Ext_grid_column_Template);

export { EWCColumn as default };

try {
  window.customElements.define('ext-column', ElementParser.withParsedCallback(EWCColumn));
} catch (e) {
  window.customElements.define('ext-column', EWCColumn);
}