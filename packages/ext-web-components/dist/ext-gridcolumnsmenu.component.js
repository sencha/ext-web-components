import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Columns_Component from './Ext/grid/menu/Columns';
export var ExtGridcolumnsmenuComponent =
/*#__PURE__*/
function (_Ext_grid_menu_Column) {
  _inheritsLoose(ExtGridcolumnsmenuComponent, _Ext_grid_menu_Column);

  function ExtGridcolumnsmenuComponent() {
    return _Ext_grid_menu_Column.call(this, '', '', {}, '') || this;
  }

  return ExtGridcolumnsmenuComponent;
}(Ext_grid_menu_Columns_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenuComponent);
  });
})();