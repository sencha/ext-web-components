import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_DateColumn from './Ext/grid/DateColumn.js';
import ElementParser from './ElementParser.js';

var EWCDatecolumn =
/*#__PURE__*/
function (_Ext_grid_DateColumn) {
  _inheritsLoose(EWCDatecolumn, _Ext_grid_DateColumn);

  function EWCDatecolumn() {
    var _this;

    _this = _Ext_grid_DateColumn.call(this, [], []) || this;
    _this.xtype = 'datecolumn';
    return _this;
  }

  return EWCDatecolumn;
}(Ext_grid_DateColumn);

export { EWCDatecolumn as default };

try {
  window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
} catch (e) {
  window.customElements.define('ext-datecolumn', EWCDatecolumn);
}