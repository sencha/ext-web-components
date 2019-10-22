import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridcolumnsmenu =
/*#__PURE__*/
function (_Ext_grid_menu_Column) {
  _inheritsLoose(ExtGridcolumnsmenu, _Ext_grid_menu_Column);

  function ExtGridcolumnsmenu() {
    var _this;

    _this = _Ext_grid_menu_Column.call(this, [], []) || this;
    _this.xtype = 'gridcolumnsmenu';
    return _this;
  }

  return ExtGridcolumnsmenu;
}(Ext_grid_menu_Columns);

export { ExtGridcolumnsmenu as default };
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(ExtGridcolumnsmenu));