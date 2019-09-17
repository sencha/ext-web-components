import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_SummaryRow_Component from './Ext/grid/SummaryRow';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridsummaryrowComponent =
/*#__PURE__*/
function (_Ext_grid_SummaryRow_) {
  _inheritsLoose(ExtGridsummaryrowComponent, _Ext_grid_SummaryRow_);

  function ExtGridsummaryrowComponent() {
    var _this;

    _this = _Ext_grid_SummaryRow_.call(this) || this;
    _this.xtype = 'gridsummaryrow';
    return _this;
  }

  return ExtGridsummaryrowComponent;
}(Ext_grid_SummaryRow_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrowComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridsummaryrow', HTMLParsedElement.withParsedCallback(ExtGridsummaryrowComponent));