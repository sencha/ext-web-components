import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Separator from './Ext/menu/Separator.js';
import ElementParser from './common/ElementParser.js';

var EWCMenuseparator = /*#__PURE__*/function (_Ext_menu_Separator) {
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

try {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', ElementParser.withParsedCallback(EWCMenuseparator));
  }
} catch (e) {
  if (window.customElements.get('ext-menuseparator') == undefined) {
    window.customElements.define('ext-menuseparator', EWCMenuseparator);
  }
}