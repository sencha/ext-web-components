import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Check_Component from './Ext/grid/cell/Check';
export var ExtCheckcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Check_) {
  _inheritsLoose(ExtCheckcellComponent, _Ext_grid_cell_Check_);

  function ExtCheckcellComponent() {
    return _Ext_grid_cell_Check_.call(this, '', '', {}, '') || this;
  }

  return ExtCheckcellComponent;
}(Ext_grid_cell_Check_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-checkcell', ExtCheckcellComponent);
  });
})();