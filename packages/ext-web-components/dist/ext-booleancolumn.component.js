import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Boolean_Component from './Ext/grid/column/Boolean';
export var ExtBooleancolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Bool) {
  _inheritsLoose(ExtBooleancolumnComponent, _Ext_grid_column_Bool);

  function ExtBooleancolumnComponent() {
    return _Ext_grid_column_Bool.call(this, '', '', {}, '') || this;
  }

  return ExtBooleancolumnComponent;
}(Ext_grid_column_Boolean_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-booleancolumn', ExtBooleancolumnComponent);
  });
})();