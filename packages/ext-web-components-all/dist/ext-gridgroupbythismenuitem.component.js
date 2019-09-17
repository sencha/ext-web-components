import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_GroupByThis_Component from './Ext/grid/menu/GroupByThis';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridgroupbythismenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_GroupB) {
  _inheritsLoose(ExtGridgroupbythismenuitemComponent, _Ext_grid_menu_GroupB);

  function ExtGridgroupbythismenuitemComponent() {
    var _this;

    _this = _Ext_grid_menu_GroupB.call(this) || this;
    _this.xtype = 'gridgroupbythismenuitem';
    return _this;
  }

  return ExtGridgroupbythismenuitemComponent;
}(Ext_grid_menu_GroupByThis_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(ExtGridgroupbythismenuitemComponent));