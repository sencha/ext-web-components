import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FileButton from './Ext/field/FileButton.js';
import ElementParser from './ElementParser.js';

var EWCFilebutton =
/*#__PURE__*/
function (_Ext_field_FileButton) {
  _inheritsLoose(EWCFilebutton, _Ext_field_FileButton);

  function EWCFilebutton() {
    var _this;

    _this = _Ext_field_FileButton.call(this, [], []) || this;
    _this.xtype = 'filebutton';
    return _this;
  }

  return EWCFilebutton;
}(Ext_field_FileButton);

export { EWCFilebutton as default };
window.customElements.define('ext-filebutton', ElementParser.withParsedCallback(EWCFilebutton));