import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCNumbercolumn = /*#__PURE__*/function (_Ext_grid_NumberColum) {
  _inheritsLoose(EWCNumbercolumn, _Ext_grid_NumberColum);

  function EWCNumbercolumn() {
    var _this;

    _this = _Ext_grid_NumberColum.call(this, [], []) || this;
    _this.xtype = 'numbercolumn';
    return _this;
  }

  return EWCNumbercolumn;
}(Ext_grid_NumberColumn);

export { EWCNumbercolumn as default };

try {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', EWCNumbercolumn);
  }
}