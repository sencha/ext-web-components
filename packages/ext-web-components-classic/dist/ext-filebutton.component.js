import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_FileButton from './Ext/form/field/FileButton.js';
import ElementParser from './common/ElementParser.js';

var EWCFilebutton = /*#__PURE__*/function (_Ext_form_field_FileB) {
  _inheritsLoose(EWCFilebutton, _Ext_form_field_FileB);

  function EWCFilebutton() {
    var _this;

    _this = _Ext_form_field_FileB.call(this, [], []) || this;
    _this.xtype = 'filebutton';
    return _this;
  }

  return EWCFilebutton;
}(Ext_form_field_FileButton);

export { EWCFilebutton as default };

try {
  if (window.customElements.get('ext-filebutton') == undefined) {
    window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));
  }
} catch (e) {
  if (window.customElements.get('ext-filebutton') == undefined) {
    window.customElements.define('ext-filebutton', EWCFilebutton);
  }
}