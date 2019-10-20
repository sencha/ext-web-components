import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtGridsummaryrow =
/*#__PURE__*/
function (_Ext_grid_SummaryRow) {
  _inheritsLoose(ExtGridsummaryrow, _Ext_grid_SummaryRow);

  function ExtGridsummaryrow() {
    var _this;

    _this = _Ext_grid_SummaryRow.call(this, [], []) || this;
    _this.xtype = 'gridsummaryrow';
    return _this;
  }

  return ExtGridsummaryrow;
}(Ext_grid_SummaryRow); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrow);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtGridsummaryrow as default };
window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrow)); //export default reactify(ExtGridsummaryrow);