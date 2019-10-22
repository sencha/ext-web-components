import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGridsortdescmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_SortDe) {
  _inheritsLoose(ExtGridsortdescmenuitem, _Ext_grid_menu_SortDe);

  function ExtGridsortdescmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortDe.call(this, [], []) || this;
    _this.xtype = 'gridsortdescmenuitem';
    return _this;
  }

  return ExtGridsortdescmenuitem;
}(Ext_grid_menu_SortDesc);

export { ExtGridsortdescmenuitem as default };
window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortdescmenuitem));