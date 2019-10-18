import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtMenucheckitemComponent =
/*#__PURE__*/
function (_Ext_menu_CheckItem) {
  _inheritsLoose(ExtMenucheckitemComponent, _Ext_menu_CheckItem);

  function ExtMenucheckitemComponent() {
    var _this;

    _this = _Ext_menu_CheckItem.call(this, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return ExtMenucheckitemComponent;
}(Ext_menu_CheckItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menucheckitem', ExtMenucheckitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menucheckitem', HTMLParsedElement.withParsedCallback(ExtMenucheckitemComponent));