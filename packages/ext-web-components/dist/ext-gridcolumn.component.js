import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template_Component from './Ext/grid/column/Template';
export var ExtGridcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtGridcolumnComponent, _Ext_grid_column_Temp);

  function ExtGridcolumnComponent() {
    return _Ext_grid_column_Temp.call(this, '', '', {}, '') || this;
  }

  return ExtGridcolumnComponent;
}(Ext_grid_column_Template_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridcolumn', ExtGridcolumnComponent);
  });
})();