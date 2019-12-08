import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_NumberColumn from '@sencha/ext-runtime-base/dist/./Ext/grid/NumberColumn.js';
import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './ElementParser.js';

var EWCNumbercolumn =
/*#__PURE__*/
function (_Ext_grid_NumberColum) {
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
window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));