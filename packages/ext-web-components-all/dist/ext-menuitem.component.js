import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMenuitem =
/*#__PURE__*/
function (_Ext_menu_TextItem) {
  _inheritsLoose(ExtMenuitem, _Ext_menu_TextItem);

  function ExtMenuitem() {
    var _this;

    _this = _Ext_menu_TextItem.call(this, [], []) || this;
    _this.xtype = 'menuitem';
    return _this;
  }

  return ExtMenuitem;
}(Ext_menu_TextItem);

export { ExtMenuitem as default };
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(ExtMenuitem));