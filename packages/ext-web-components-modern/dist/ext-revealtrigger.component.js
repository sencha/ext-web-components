import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_field_trigger_Reveal from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Reveal.js';
import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import ElementParser from './ElementParser.js';

var EWCRevealtrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Re) {
  _inheritsLoose(EWCRevealtrigger, _Ext_field_trigger_Re);

  function EWCRevealtrigger() {
    var _this;

    _this = _Ext_field_trigger_Re.call(this, [], []) || this;
    _this.xtype = 'revealtrigger';
    return _this;
  }

  return EWCRevealtrigger;
}(Ext_field_trigger_Reveal);

export { EWCRevealtrigger as default };
window.customElements.define('ext-revealtrigger', ElementParser.withParsedCallback(EWCRevealtrigger));