import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Text_Component from './Ext/grid/column/Text';
export var ExtTextcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Text) {
  _inheritsLoose(ExtTextcolumnComponent, _Ext_grid_column_Text);

  function ExtTextcolumnComponent() {
    return _Ext_grid_column_Text.call(this, '', '', {}, '') || this;
  }

  return ExtTextcolumnComponent;
}(Ext_grid_column_Text_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-textcolumn', ExtTextcolumnComponent);
  });
})();