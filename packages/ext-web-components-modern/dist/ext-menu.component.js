import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_menu_Menu from '@sencha/ext-runtime-base/dist/./Ext/menu/Menu.js';
import Ext_menu_Menu from './Ext/menu/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCMenu =
/*#__PURE__*/
function (_Ext_menu_Menu) {
  _inheritsLoose(EWCMenu, _Ext_menu_Menu);

  function EWCMenu() {
    var _this;

    _this = _Ext_menu_Menu.call(this, [], []) || this;
    _this.xtype = 'menu';
    return _this;
  }

  return EWCMenu;
}(Ext_menu_Menu);

export { EWCMenu as default };
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(EWCMenu));