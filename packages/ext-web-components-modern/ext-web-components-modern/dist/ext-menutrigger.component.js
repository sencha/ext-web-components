import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import ElementParser from './common/ElementParser.js';

var EWCMenutrigger = /*#__PURE__*/function (_Ext_field_trigger_Me) {
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
  if (window.customElements.get('ext-menutrigger') == undefined) {
    window.customElements.define('ext-menutrigger', ElementParser.withParsedCallback(EWCMenutrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-menutrigger') == undefined) {
    window.customElements.define('ext-menutrigger', EWCMenutrigger);
  }
}