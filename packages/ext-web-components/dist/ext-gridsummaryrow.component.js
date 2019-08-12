import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_SummaryRow_Component from './Ext/grid/SummaryRow';
export var ExtGridsummaryrowComponent =
/*#__PURE__*/
function (_Ext_grid_SummaryRow_) {
  _inheritsLoose(ExtGridsummaryrowComponent, _Ext_grid_SummaryRow_);

  function ExtGridsummaryrowComponent() {
    return _Ext_grid_SummaryRow_.call(this, '', '', {}, '') || this;
  }

  return ExtGridsummaryrowComponent;
}(Ext_grid_SummaryRow_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridsummaryrow', ExtGridsummaryrowComponent);
  });
})();