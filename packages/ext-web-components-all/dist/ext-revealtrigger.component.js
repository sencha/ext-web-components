import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRevealtrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Re) {
  _inheritsLoose(ExtRevealtrigger, _Ext_field_trigger_Re);

  function ExtRevealtrigger() {
    var _this;

    _this = _Ext_field_trigger_Re.call(this, [], []) || this;
    _this.xtype = 'revealtrigger';
    return _this;
  }

  return ExtRevealtrigger;
}(Ext_field_trigger_Reveal);

export { ExtRevealtrigger as default };
window.customElements.define('ext-revealtrigger', HTMLParsedElement.withParsedCallback(ExtRevealtrigger));