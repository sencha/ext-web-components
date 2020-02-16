import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_File from './Ext/field/File.js';
import ElementParser from './runtime/ElementParser.js';

var EWCFilefield =
/*#__PURE__*/
function (_Ext_field_File) {
  _inheritsLoose(EWCFilefield, _Ext_field_File);

  function EWCFilefield() {
    var _this;

    _this = _Ext_field_File.call(this, [], []) || this;
    _this.xtype = 'filefield';
    return _this;
  }

  return EWCFilefield;
}(Ext_field_File);

export { EWCFilefield as default };

try {
  window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));
} catch (e) {
  window.customElements.define('ext-filefield', EWCFilefield);
}