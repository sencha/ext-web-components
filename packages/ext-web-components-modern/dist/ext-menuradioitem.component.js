import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import ElementParser from './runtime/ElementParser.js';

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

try {
  window.customElements.define('ext-menuradioitem', ElementParser.withParsedCallback(EWCMenuradioitem));
} catch (e) {
  window.customElements.define('ext-menuradioitem', EWCMenuradioitem);
}