import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_trigger_Menu from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Menu.js';
import Ext_field_trigger_Menu from './Ext/field/trigger/Menu.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(EWCMenutrigger));