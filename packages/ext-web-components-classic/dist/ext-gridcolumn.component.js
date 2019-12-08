import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_Column from '@sencha/ext-runtime-base/dist/./Ext/grid/Column.js';
import Ext_grid_Column from './Ext/grid/Column.js';
import ElementParser from './ElementParser.js';

var EWCGridcolumn =
/*#__PURE__*/
function (_Ext_grid_Column) {
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
window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));