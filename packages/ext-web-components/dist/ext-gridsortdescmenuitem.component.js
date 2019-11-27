import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_menu_SortDesc from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/SortDesc.js';
import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGridsortdescmenuitem =
/*#__PURE__*/
function (_Ext_grid_menu_SortDe) {
  _inheritsLoose(EWCGridsortdescmenuitem, _Ext_grid_menu_SortDe);

  function EWCGridsortdescmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortDe.call(this, [], []) || this;
    _this.xtype = 'gridsortdescmenuitem';
    return _this;
  }

  return EWCGridsortdescmenuitem;
}(Ext_grid_menu_SortDesc);

export { EWCGridsortdescmenuitem as default };
window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(EWCGridsortdescmenuitem));