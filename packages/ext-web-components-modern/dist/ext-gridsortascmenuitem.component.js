import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridsortascmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_SortAs) {
  _inheritsLoose(EWCGridsortascmenuitem, _Ext_grid_menu_SortAs);

  function EWCGridsortascmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortAs.call(this, [], []) || this;
    _this.xtype = 'gridsortascmenuitem';
    return _this;
  }

  return EWCGridsortascmenuitem;
}(Ext_grid_menu_SortAsc);

export { EWCGridsortascmenuitem as default };

try {
  window.customElements.define('ext-gridsortascmenuitem', ElementParser.withParsedCallback(EWCGridsortascmenuitem));
} catch (e) {
  window.customElements.define('ext-gridsortascmenuitem', EWCGridsortascmenuitem);
}