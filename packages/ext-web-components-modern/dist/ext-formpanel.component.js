import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './ElementParser.js';

var EWCFormpanel =
/*#__PURE__*/
function (_Ext_form_FormPanel) {
  _inheritsLoose(EWCFormpanel, _Ext_form_FormPanel);

  function EWCFormpanel() {
    var _this;

    _this = _Ext_form_FormPanel.call(this, [], []) || this;
    _this.xtype = 'formpanel';
    return _this;
  }

  return EWCFormpanel;
}(Ext_form_FormPanel);

export { EWCFormpanel as default };

try {
  window.customElements.define('ext-formpanel', ElementParser.withParsedCallback(EWCFormpanel));
} catch (e) {
  window.customElements.define('ext-formpanel', EWCFormpanel);
}