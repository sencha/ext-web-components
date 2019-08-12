import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Check_Component from './Ext/grid/column/Check';
export var ExtCheckcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Chec) {
  _inheritsLoose(ExtCheckcolumnComponent, _Ext_grid_column_Chec);

  function ExtCheckcolumnComponent() {
    return _Ext_grid_column_Chec.call(this, '', '', {}, '') || this;
  }

  return ExtCheckcolumnComponent;
}(Ext_grid_column_Check_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-checkcolumn', ExtCheckcolumnComponent);
  });
})();