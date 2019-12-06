import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_menu_SortAsc from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/SortAsc.js';
import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(EWCGridsortascmenuitem));