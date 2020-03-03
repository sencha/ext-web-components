import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridcolumn = /*#__PURE__*/function (_Ext_grid_column_Temp) {
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

try {
  window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
} catch (e) {
  window.customElements.define('ext-gridcolumn', EWCGridcolumn);
}