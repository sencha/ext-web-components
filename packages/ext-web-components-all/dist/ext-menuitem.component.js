import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtMenuitemComponent =
/*#__PURE__*/
function (_Ext_menu_TextItem) {
  _inheritsLoose(ExtMenuitemComponent, _Ext_menu_TextItem);

  function ExtMenuitemComponent() {
    var _this;

    _this = _Ext_menu_TextItem.call(this, [], []) || this;
    _this.xtype = 'menuitem';
    return _this;
  }

  return ExtMenuitemComponent;
}(Ext_menu_TextItem); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menuitem', ExtMenuitemComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitemComponent));