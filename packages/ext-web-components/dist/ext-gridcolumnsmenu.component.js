import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_menu_Columns from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/Columns.js';
import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGridcolumnsmenu =
/*#__PURE__*/
function (_Ext_grid_menu_Column) {
  _inheritsLoose(EWCGridcolumnsmenu, _Ext_grid_menu_Column);

  function EWCGridcolumnsmenu() {
    var _this;

    _this = _Ext_grid_menu_Column.call(this, [], []) || this;
    _this.xtype = 'gridcolumnsmenu';
    return _this;
  }

  return EWCGridcolumnsmenu;
}(Ext_grid_menu_Columns);

export { EWCGridcolumnsmenu as default };
window.customElements.define('ext-gridcolumnsmenu', HTMLParsedElement.withParsedCallback(EWCGridcolumnsmenu));