import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_RadioItem from './Ext/menu/RadioItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMenuradioitem =
/*#__PURE__*/
function (_Ext_menu_RadioItem) {
  _inheritsLoose(ExtMenuradioitem, _Ext_menu_RadioItem);

  function ExtMenuradioitem() {
    var _this;

    _this = _Ext_menu_RadioItem.call(this, [], []) || this;
    _this.xtype = 'menuradioitem';
    return _this;
  }

  return ExtMenuradioitem;
}(Ext_menu_RadioItem);

export { ExtMenuradioitem as default };
window.customElements.define('ext-menuradioitem', HTMLParsedElement.withParsedCallback(ExtMenuradioitem));