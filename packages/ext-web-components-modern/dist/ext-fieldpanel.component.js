import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel from './Ext/field/Panel.js';
import ElementParser from './common/ElementParser.js';

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
  if (window.customElements.get('ext-fieldpanel') == undefined) {
    window.customElements.define('ext-fieldpanel', ElementParser.withParsedCallback(EWCFieldpanel));
  }
} catch (e) {
  if (window.customElements.get('ext-fieldpanel') == undefined) {
    window.customElements.define('ext-fieldpanel', EWCFieldpanel);
  }
}