import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridsortascmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_SortAs) {
  _inheritsLoose(ExtGridsortascmenuitem, _Ext_grid_menu_SortAs);

  function ExtGridsortascmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortAs.call(this, [], []) || this;
    _this.xtype = 'gridsortascmenuitem';
    return _this;
  }

  return ExtGridsortascmenuitem;
}(Ext_grid_menu_SortAsc);

export { ExtGridsortascmenuitem as default };
window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortascmenuitem));