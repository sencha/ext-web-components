import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Number_Component from './Ext/grid/cell/Number';
export var ExtNumbercellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(ExtNumbercellComponent, _Ext_grid_cell_Number);

  function ExtNumbercellComponent() {
    return _Ext_grid_cell_Number.call(this, '', '', {}, '') || this;
  }

  return ExtNumbercellComponent;
}(Ext_grid_cell_Number_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-numbercell', ExtNumbercellComponent);
  });
})();