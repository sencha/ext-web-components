import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text_Component from './Ext/grid/cell/Text';
export var ExtTextcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Text_C) {
  _inheritsLoose(ExtTextcellComponent, _Ext_grid_cell_Text_C);

  function ExtTextcellComponent() {
    return _Ext_grid_cell_Text_C.call(this, '', '', {}, '') || this;
  }

  return ExtTextcellComponent;
}(Ext_grid_cell_Text_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-textcell', ExtTextcellComponent);
  });
})();