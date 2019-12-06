import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_menu_Separator from '@sencha/ext-runtime-base/dist/./Ext/menu/Separator.js';
import Ext_menu_Separator from './Ext/menu/Separator.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCMenuseparator =
/*#__PURE__*/
function (_Ext_menu_Separator) {
  _inheritsLoose(EWCMenuseparator, _Ext_menu_Separator);

  function EWCMenuseparator() {
    var _this;

    _this = _Ext_menu_Separator.call(this, [], []) || this;
    _this.xtype = 'menuseparator';
    return _this;
  }

  return EWCMenuseparator;
}(Ext_menu_Separator);

export { EWCMenuseparator as default };
window.customElements.define('ext-menuseparator', HTMLParsedElement.withParsedCallback(EWCMenuseparator));