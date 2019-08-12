import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortAsc_Component from './Ext/grid/menu/SortAsc';
export var ExtGridsortascmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_SortAs) {
  _inheritsLoose(ExtGridsortascmenuitemComponent, _Ext_grid_menu_SortAs);

  function ExtGridsortascmenuitemComponent() {
    return _Ext_grid_menu_SortAs.call(this, '', '', {}, '') || this;
  }

  return ExtGridsortascmenuitemComponent;
}(Ext_grid_menu_SortAsc_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridsortascmenuitem', ExtGridsortascmenuitemComponent);
  });
})();