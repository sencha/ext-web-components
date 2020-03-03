import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFieldpanel = /*#__PURE__*/function (_Ext_field_Panel) {
  _inheritsLoose(EWCFieldpanel, _Ext_field_Panel);

  function EWCFieldpanel() {
    var _this;

    _this = _Ext_field_Panel.call(this, [], []) || this;
    _this.xtype = 'fieldpanel';
    return _this;
  }

  return EWCFieldpanel;
}(Ext_field_Panel);

export { EWCFieldpanel as default };

try {
  window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
} catch (e) {
  window.customElements.define('ext-fieldpanel', EWCFieldpanel);
}