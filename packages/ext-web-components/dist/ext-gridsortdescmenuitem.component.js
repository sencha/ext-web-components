import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridsortdescmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_SortDe) {
  _inheritsLoose(ExtGridsortdescmenuitemComponent, _Ext_grid_menu_SortDe);

  function ExtGridsortdescmenuitemComponent() {
    var _this;

    _this = _Ext_grid_menu_SortDe.call(this, [], []) || this;
    _this.xtype = 'gridsortdescmenuitem';
    return _this;
  }

  return ExtGridsortdescmenuitemComponent;
}(Ext_grid_menu_SortDesc); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortdescmenuitem', ExtGridsortdescmenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridsortdescmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortdescmenuitemComponent));