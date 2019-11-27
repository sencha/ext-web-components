import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_menu_RadioItem from '@sencha/ext-runtime-base/dist/./Ext/menu/RadioItem.js';
import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCMenuradioitem =
/*#__PURE__*/
function (_Ext_menu_RadioItem) {
  _inheritsLoose(EWCMenuradioitem, _Ext_menu_RadioItem);

  function EWCMenuradioitem() {
    var _this;

    _this = _Ext_menu_RadioItem.call(this, [], []) || this;
    _this.xtype = 'menuradioitem';
    return _this;
  }

  return EWCMenuradioitem;
}(Ext_menu_RadioItem);

export { EWCMenuradioitem as default };
window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(EWCMenuradioitem));