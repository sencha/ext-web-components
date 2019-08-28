import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_RowNumberer_Component from './Ext/grid/column/RowNumberer';
export var ExtRownumbererComponent =
/*#__PURE__*/
function (_Ext_grid_column_RowN) {
  _inheritsLoose(ExtRownumbererComponent, _Ext_grid_column_RowN);

  function ExtRownumbererComponent() {
    return _Ext_grid_column_RowN.call(this, '', '', {}, '') || this;
  }

  return ExtRownumbererComponent;
}(Ext_grid_column_RowNumberer_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-rownumberer', ExtRownumbererComponent);
  });
})();