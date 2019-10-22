import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Separator from './Ext/menu/Separator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMenuseparator =
/*#__PURE__*/
function (_Ext_menu_Separator) {
  _inheritsLoose(ExtMenuseparator, _Ext_menu_Separator);

  function ExtMenuseparator() {
    var _this;

    _this = _Ext_menu_Separator.call(this, [], []) || this;
    _this.xtype = 'menuseparator';
    return _this;
  }

  return ExtMenuseparator;
}(Ext_menu_Separator);

export { ExtMenuseparator as default };
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(ExtMenuseparator));