import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtMenutrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Me) {
  _inheritsLoose(ExtMenutrigger, _Ext_field_trigger_Me);

  function ExtMenutrigger() {
    var _this;

    _this = _Ext_field_trigger_Me.call(this, [], []) || this;
    _this.xtype = 'menutrigger';
    return _this;
  }

  return ExtMenutrigger;
}(Ext_field_trigger_Menu);

export { ExtMenutrigger as default };
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(ExtMenutrigger));