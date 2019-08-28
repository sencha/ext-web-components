import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Date_Component from './Ext/grid/cell/Date';
export var ExtDatecellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Date_C) {
  _inheritsLoose(ExtDatecellComponent, _Ext_grid_cell_Date_C);

  function ExtDatecellComponent() {
    return _Ext_grid_cell_Date_C.call(this, '', '', {}, '') || this;
  }

  return ExtDatecellComponent;
}(Ext_grid_cell_Date_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datecell', ExtDatecellComponent);
  });
})();