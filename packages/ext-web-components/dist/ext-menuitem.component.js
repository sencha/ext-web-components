import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_TextItem_Component from './Ext/menu/TextItem';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenuitemComponent =
/*#__PURE__*/
function (_Ext_menu_TextItem_Co) {
  _inheritsLoose(ExtMenuitemComponent, _Ext_menu_TextItem_Co);

  function ExtMenuitemComponent() {
    var _this;

    _this = _Ext_menu_TextItem_Co.call(this, {}, [], []) || this;
    _this.xtype = 'menuitem';
    return _this;
  }

  return ExtMenuitemComponent;
}(Ext_menu_TextItem_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuitem', ExtMenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitemComponent));