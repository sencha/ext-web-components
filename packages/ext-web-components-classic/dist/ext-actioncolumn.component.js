import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_ActionColumn from './Ext/grid/ActionColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCActioncolumn = /*#__PURE__*/function (_Ext_grid_ActionColum) {
  _inheritsLoose(EWCActioncolumn, _Ext_grid_ActionColum);

  function EWCActioncolumn() {
    var _this;

    _this = _Ext_grid_ActionColum.call(this, [], []) || this;
    _this.xtype = 'actioncolumn';
    return _this;
  }

  return EWCActioncolumn;
}(Ext_grid_ActionColumn);

export { EWCActioncolumn as default };

try {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', ElementParser.withParsedCallback(EWCActioncolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-actioncolumn') == undefined) {
    window.customElements.define('ext-actioncolumn', EWCActioncolumn);
  }
}