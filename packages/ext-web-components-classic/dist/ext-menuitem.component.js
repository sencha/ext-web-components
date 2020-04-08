import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import ElementParser from './common/ElementParser.js';

var EWCMenuitem = /*#__PURE__*/function (_Ext_menu_TextItem) {
  _inheritsLoose(EWCMenuitem, _Ext_menu_TextItem);

  function EWCMenuitem() {
    var _this;

    _this = _Ext_menu_TextItem.call(this, [], []) || this;
    _this.xtype = 'menuitem';
    return _this;
  }

  return EWCMenuitem;
}(Ext_menu_TextItem);

export { EWCMenuitem as default };

try {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', ElementParser.withParsedCallback(EWCMenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-menuitem') == undefined) {
    window.customElements.define('ext-menuitem', EWCMenuitem);
  }
}