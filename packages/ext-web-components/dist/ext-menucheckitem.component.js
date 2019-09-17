import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem_Component from './Ext/menu/CheckItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenucheckitemComponent =
/*#__PURE__*/
function (_Ext_menu_CheckItem_C) {
  _inheritsLoose(ExtMenucheckitemComponent, _Ext_menu_CheckItem_C);

  function ExtMenucheckitemComponent() {
    var _this;

    _this = _Ext_menu_CheckItem_C.call(this, {}, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return ExtMenucheckitemComponent;
}(Ext_menu_CheckItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menucheckitem', ExtMenucheckitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(ExtMenucheckitemComponent));