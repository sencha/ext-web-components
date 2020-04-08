import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldContainer from './Ext/form/FieldContainer.js';
import ElementParser from './common/ElementParser.js';

var EWCFieldcontainer = /*#__PURE__*/function (_Ext_form_FieldContai) {
  _inheritsLoose(EWCFieldcontainer, _Ext_form_FieldContai);

  function EWCFieldcontainer() {
    var _this;

    _this = _Ext_form_FieldContai.call(this, [], []) || this;
    _this.xtype = 'fieldcontainer';
    return _this;
  }

  return EWCFieldcontainer;
}(Ext_form_FieldContainer);

export { EWCFieldcontainer as default };

try {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', ElementParser.withParsedCallback(EWCFieldcontainer));
  }
} catch (e) {
  if (window.customElements.get('ext-fieldcontainer') == undefined) {
    window.customElements.define('ext-fieldcontainer', EWCFieldcontainer);
  }
}