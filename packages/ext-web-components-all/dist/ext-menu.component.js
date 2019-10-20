import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Menu from './Ext/menu/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtMenu =
/*#__PURE__*/
function (_Ext_menu_Menu) {
  _inheritsLoose(ExtMenu, _Ext_menu_Menu);

  function ExtMenu() {
    var _this;

    _this = _Ext_menu_Menu.call(this, [], []) || this;
    _this.xtype = 'menu';
    return _this;
  }

  return ExtMenu;
}(Ext_menu_Menu); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menu', ExtMenu);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtMenu as default };
window.customElements.define('ext-menu', HTMLParsedElement.withParsedCallback(ExtMenu)); //export default reactify(ExtMenu);