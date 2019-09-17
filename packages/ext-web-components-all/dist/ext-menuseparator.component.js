import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Separator_Component from './Ext/menu/Separator';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenuseparatorComponent =
/*#__PURE__*/
function (_Ext_menu_Separator_C) {
  _inheritsLoose(ExtMenuseparatorComponent, _Ext_menu_Separator_C);

  function ExtMenuseparatorComponent() {
    var _this;

    _this = _Ext_menu_Separator_C.call(this) || this;
    _this.xtype = 'menuseparator';
    return _this;
  }

  return ExtMenuseparatorComponent;
}(Ext_menu_Separator_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuseparator', ExtMenuseparatorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(ExtMenuseparatorComponent));