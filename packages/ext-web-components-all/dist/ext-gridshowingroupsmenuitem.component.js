import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtGridshowingroupsmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_ShowIn) {
  _inheritsLoose(ExtGridshowingroupsmenuitemComponent, _Ext_grid_menu_ShowIn);

  function ExtGridshowingroupsmenuitemComponent() {
    var _this;

    _this = _Ext_grid_menu_ShowIn.call(this, [], []) || this;
    _this.xtype = 'gridshowingroupsmenuitem';
    return _this;
  }

  return ExtGridshowingroupsmenuitemComponent;
}(Ext_grid_menu_ShowInGroups); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(ExtGridshowingroupsmenuitemComponent));