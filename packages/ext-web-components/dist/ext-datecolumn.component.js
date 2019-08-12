import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Date_Component from './Ext/grid/column/Date';
export var ExtDatecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Date) {
  _inheritsLoose(ExtDatecolumnComponent, _Ext_grid_column_Date);

  function ExtDatecolumnComponent() {
    return _Ext_grid_column_Date.call(this, '', '', {}, '') || this;
  }

  return ExtDatecolumnComponent;
}(Ext_grid_column_Date_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datecolumn', ExtDatecolumnComponent);
  });
})();