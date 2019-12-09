import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_SummaryRow from '@sencha/ext-runtime-base/dist/./Ext/grid/SummaryRow.js';
import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import ElementParser from './ElementParser.js';

var EWCGridsummaryrow =
/*#__PURE__*/
function (_Ext_grid_SummaryRow) {
  _inheritsLoose(EWCGridsummaryrow, _Ext_grid_SummaryRow);

  function EWCGridsummaryrow() {
    var _this;

    _this = _Ext_grid_SummaryRow.call(this, [], []) || this;
    _this.xtype = 'gridsummaryrow';
    return _this;
  }

  return EWCGridsummaryrow;
}(Ext_grid_SummaryRow);

export { EWCGridsummaryrow as default };
window.customElements.define('ext-gridsummaryrow', ElementParser.withParsedCallback(EWCGridsummaryrow));