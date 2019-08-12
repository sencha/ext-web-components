import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortDesc_Component from './Ext/grid/menu/SortDesc';
export var ExtGridsortdescmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_SortDe) {
  _inheritsLoose(ExtGridsortdescmenuitemComponent, _Ext_grid_menu_SortDe);

  function ExtGridsortdescmenuitemComponent() {
    return _Ext_grid_menu_SortDe.call(this, '', '', {}, '') || this;
  }

  return ExtGridsortdescmenuitemComponent;
}(Ext_grid_menu_SortDesc_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridsortdescmenuitem', ExtGridsortdescmenuitemComponent);
  });
})();