import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_menu_TextItem from '@sencha/ext-runtime-base/dist/./Ext/menu/TextItem.js';
import Ext_menu_TextItem from './Ext/menu/TextItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCMenuitem =
/*#__PURE__*/
function (_Ext_menu_TextItem) {
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
window.customElements.define('ext-menuitem', HTMLParsedElement.withParsedCallback(EWCMenuitem));