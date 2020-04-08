import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Column from './Ext/grid/Column.js';
import ElementParser from './common/ElementParser.js';

var EWCGridcolumn = /*#__PURE__*/function (_Ext_grid_Column) {
  _inheritsLoose(EWCGridcolumn, _Ext_grid_Column);

  function EWCGridcolumn() {
    var _this;

    _this = _Ext_grid_Column.call(this, [], []) || this;
    _this.xtype = 'gridcolumn';
    return _this;
  }

  return EWCGridcolumn;
}(Ext_grid_Column);

export { EWCGridcolumn as default };

try {
  if (window.customElements.get('ext-gridcolumn') == undefined) {
    window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-gridcolumn') == undefined) {
    window.customElements.define('ext-gridcolumn', EWCGridcolumn);
  }
}