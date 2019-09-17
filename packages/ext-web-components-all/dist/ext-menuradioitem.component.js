import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_RadioItem_Component from './Ext/menu/RadioItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenuradioitemComponent =
/*#__PURE__*/
function (_Ext_menu_RadioItem_C) {
  _inheritsLoose(ExtMenuradioitemComponent, _Ext_menu_RadioItem_C);

  function ExtMenuradioitemComponent() {
    var _this;

    _this = _Ext_menu_RadioItem_C.call(this) || this;
    _this.xtype = 'menuradioitem';
    return _this;
  }

  return ExtMenuradioitemComponent;
}(Ext_menu_RadioItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuradioitem', ExtMenuradioitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(ExtMenuradioitemComponent));