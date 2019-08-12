import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Separator_Component from './Ext/menu/Separator';
export var ExtMenuseparatorComponent =
/*#__PURE__*/
function (_Ext_menu_Separator_C) {
  _inheritsLoose(ExtMenuseparatorComponent, _Ext_menu_Separator_C);

  function ExtMenuseparatorComponent() {
    return _Ext_menu_Separator_C.call(this, '', '', {}, '') || this;
  }

  return ExtMenuseparatorComponent;
}(Ext_menu_Separator_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-menuseparator', ExtMenuseparatorComponent);
  });
})();