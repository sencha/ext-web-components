import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_GroupByThis_Component from './Ext/grid/menu/GroupByThis';
export var ExtGridgroupbythismenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_GroupB) {
  _inheritsLoose(ExtGridgroupbythismenuitemComponent, _Ext_grid_menu_GroupB);

  function ExtGridgroupbythismenuitemComponent() {
    return _Ext_grid_menu_GroupB.call(this, '', '', {}, '') || this;
  }

  return ExtGridgroupbythismenuitemComponent;
}(Ext_grid_menu_GroupByThis_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitemComponent);
  });
})();