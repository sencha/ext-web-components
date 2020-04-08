import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_CheckColumn from './Ext/grid/column/CheckColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCCheckcolumn = /*#__PURE__*/function (_Ext_grid_column_Chec) {
  _inheritsLoose(EWCCheckcolumn, _Ext_grid_column_Chec);

  function EWCCheckcolumn() {
    var _this;

    _this = _Ext_grid_column_Chec.call(this, [], []) || this;
    _this.xtype = 'checkcolumn';
    return _this;
  }

  return EWCCheckcolumn;
}(Ext_grid_column_CheckColumn);

export { EWCCheckcolumn as default };

try {
  if (window.customElements.get('ext-checkcolumn') == undefined) {
    window.customElements.define('ext-checkcolumn', ElementParser.withParsedCallback(EWCCheckcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-checkcolumn') == undefined) {
    window.customElements.define('ext-checkcolumn', EWCCheckcolumn);
  }
}