import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import ElementParser from './ElementParser.js';

var EWCMenutrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Me) {
  _inheritsLoose(EWCMenutrigger, _Ext_field_trigger_Me);

  function EWCMenutrigger() {
    var _this;

    _this = _Ext_field_trigger_Me.call(this, [], []) || this;
    _this.xtype = 'menutrigger';
    return _this;
  }

  return EWCMenutrigger;
}(Ext_field_trigger_Menu);

export { EWCMenutrigger as default };

try {
  window.customElements.define('ext-menutrigger', ElementParser.withParsedCallback(EWCMenutrigger));
} catch (e) {
  window.customElements.define('ext-menutrigger', EWCMenutrigger);
}