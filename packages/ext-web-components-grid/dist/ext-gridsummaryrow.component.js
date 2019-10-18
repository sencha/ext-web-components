import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_SummaryRow from './Ext/grid/SummaryRow.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGridsummaryrowComponent =
/*#__PURE__*/
function (_Ext_grid_SummaryRow) {
  _inheritsLoose(ExtGridsummaryrowComponent, _Ext_grid_SummaryRow);

  function ExtGridsummaryrowComponent() {
    var _this;

    _this = _Ext_grid_SummaryRow.call(this, [], []) || this;
    _this.xtype = 'gridsummaryrow';
    return _this;
  }

  return ExtGridsummaryrowComponent;
}(Ext_grid_SummaryRow); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrowComponent));