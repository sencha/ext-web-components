import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_TextItem_Component from './Ext/menu/TextItem';
export var ExtMenuitemComponent =
/*#__PURE__*/
function (_Ext_menu_TextItem_Co) {
  _inheritsLoose(ExtMenuitemComponent, _Ext_menu_TextItem_Co);

  function ExtMenuitemComponent() {
    return _Ext_menu_TextItem_Co.call(this, '', '', {}, '') || this;
  }

  return ExtMenuitemComponent;
}(Ext_menu_TextItem_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-menuitem', ExtMenuitemComponent);
  });
})();