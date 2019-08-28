import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Number_Component from './Ext/grid/column/Number';
export var ExtNumbercolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Numb) {
  _inheritsLoose(ExtNumbercolumnComponent, _Ext_grid_column_Numb);

  function ExtNumbercolumnComponent() {
    return _Ext_grid_column_Numb.call(this, '', '', {}, '') || this;
  }

  return ExtNumbercolumnComponent;
}(Ext_grid_column_Number_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-numbercolumn', ExtNumbercolumnComponent);
  });
})();