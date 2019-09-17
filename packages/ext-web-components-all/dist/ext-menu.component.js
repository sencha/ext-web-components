import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Menu_Component from './Ext/menu/Menu';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenuComponent =
/*#__PURE__*/
function (_Ext_menu_Menu_Compon) {
  _inheritsLoose(ExtMenuComponent, _Ext_menu_Menu_Compon);

  function ExtMenuComponent() {
    var _this;

    _this = _Ext_menu_Menu_Compon.call(this) || this;
    _this.xtype = 'menu';
    return _this;
  }

  return ExtMenuComponent;
}(Ext_menu_Menu_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menu', ExtMenuComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(ExtMenuComponent));