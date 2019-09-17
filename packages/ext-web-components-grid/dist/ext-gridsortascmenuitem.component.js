import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_SortAsc_Component from './Ext/grid/menu/SortAsc';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridsortascmenuitemComponent =
/*#__PURE__*/
function (_Ext_grid_menu_SortAs) {
  _inheritsLoose(ExtGridsortascmenuitemComponent, _Ext_grid_menu_SortAs);

  function ExtGridsortascmenuitemComponent() {
    var _this;

    _this = _Ext_grid_menu_SortAs.call(this) || this;
    _this.xtype = 'gridsortascmenuitem';
    return _this;
  }

  return ExtGridsortascmenuitemComponent;
}(Ext_grid_menu_SortAsc_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridsortascmenuitem', ExtGridsortascmenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridsortascmenuitem', HTMLParsedElement.withParsedCallback(ExtGridsortascmenuitemComponent));