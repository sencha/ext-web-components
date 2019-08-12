import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template_Component from './Ext/grid/column/Template';
export var ExtTemplatecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtTemplatecolumnComponent, _Ext_grid_column_Temp);

  function ExtTemplatecolumnComponent() {
    return _Ext_grid_column_Temp.call(this, '', '', {}, '') || this;
  }

  return ExtTemplatecolumnComponent;
}(Ext_grid_column_Template_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-templatecolumn', ExtTemplatecolumnComponent);
  });
})();