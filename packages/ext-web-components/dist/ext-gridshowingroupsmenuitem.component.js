import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_ShowInGroups_Component from './Ext/grid/menu/ShowInGroups';
export var ExtGridshowingroupsmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_ShowIn) {
  _inheritsLoose(ExtGridshowingroupsmenuitemComponent, _Ext_grid_menu_ShowIn);

  function ExtGridshowingroupsmenuitemComponent() {
    return _Ext_grid_menu_ShowIn.call(this, '', '', {}, '') || this;
  }

  return ExtGridshowingroupsmenuitemComponent;
}(Ext_grid_menu_ShowInGroups_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitemComponent);
  });
})();