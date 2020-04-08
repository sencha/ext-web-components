import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import ElementParser from './common/ElementParser.js';

var EWCGridcolumnsmenu = /*#__PURE__*/function (_Ext_grid_menu_Column) {
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

try {
  if (window.customElements.get('ext-gridcolumnsmenu') == undefined) {
    window.customElements.define('ext-gridcolumnsmenu', ElementParser.withParsedCallback(EWCGridcolumnsmenu));
  }
} catch (e) {
  if (window.customElements.get('ext-gridcolumnsmenu') == undefined) {
    window.customElements.define('ext-gridcolumnsmenu', EWCGridcolumnsmenu);
  }
}