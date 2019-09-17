import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Columns_Component from './Ext/grid/menu/Columns';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridcolumnsmenuComponent =
/*#__PURE__*/
function (_Ext_grid_menu_Column) {
  _inheritsLoose(ExtGridcolumnsmenuComponent, _Ext_grid_menu_Column);

  function ExtGridcolumnsmenuComponent() {
    var _this;

    _this = _Ext_grid_menu_Column.call(this) || this;
    _this.xtype = 'gridcolumnsmenu';
    return _this;
  }

  return ExtGridcolumnsmenuComponent;
}(Ext_grid_menu_Columns_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenuComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenuComponent));