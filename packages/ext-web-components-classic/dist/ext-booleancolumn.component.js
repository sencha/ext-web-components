import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_BooleanColumn from './Ext/grid/BooleanColumn.js';
import ElementParser from './ElementParser.js';

var EWCBooleancolumn =
/*#__PURE__*/
function (_Ext_grid_BooleanColu) {
  _inheritsLoose(EWCBooleancolumn, _Ext_grid_BooleanColu);

  function EWCBooleancolumn() {
    var _this;

    _this = _Ext_grid_BooleanColu.call(this, [], []) || this;
    _this.xtype = 'booleancolumn';
    return _this;
  }

  return EWCBooleancolumn;
}(Ext_grid_BooleanColumn);

export { EWCBooleancolumn as default };
window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));