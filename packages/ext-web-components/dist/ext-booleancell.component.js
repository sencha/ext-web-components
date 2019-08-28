import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Boolean_Component from './Ext/grid/cell/Boolean';
export var ExtBooleancellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(ExtBooleancellComponent, _Ext_grid_cell_Boolea);

  function ExtBooleancellComponent() {
    return _Ext_grid_cell_Boolea.call(this, '', '', {}, '') || this;
  }

  return ExtBooleancellComponent;
}(Ext_grid_cell_Boolean_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-booleancell', ExtBooleancellComponent);
  });
})();