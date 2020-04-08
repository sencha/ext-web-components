import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FormPanel from './Ext/form/FormPanel.js';
import ElementParser from './common/ElementParser.js';

var EWCForm = /*#__PURE__*/function (_Ext_form_FormPanel) {
  _inheritsLoose(EWCForm, _Ext_form_FormPanel);

  function EWCForm() {
    var _this;

    _this = _Ext_form_FormPanel.call(this, [], []) || this;
    _this.xtype = 'form';
    return _this;
  }

  return EWCForm;
}(Ext_form_FormPanel);

export { EWCForm as default };

try {
  if (window.customElements.get('ext-form') == undefined) {
    window.customElements.define('ext-form', ElementParser.withParsedCallback(EWCForm));
  }
} catch (e) {
  if (window.customElements.get('ext-form') == undefined) {
    window.customElements.define('ext-form', EWCForm);
  }
}