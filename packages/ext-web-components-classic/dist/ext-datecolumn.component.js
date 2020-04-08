import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_DateColumn from './Ext/grid/DateColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCDatecolumn = /*#__PURE__*/function (_Ext_grid_DateColumn) {
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
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', EWCDatecolumn);
  }
}