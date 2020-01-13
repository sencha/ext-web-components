import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_File from './Ext/form/File.js';
import ElementParser from './ElementParser.js';

var EWCFilefield =
/*#__PURE__*/
function (_Ext_form_File) {
  _inheritsLoose(EWCFilefield, _Ext_form_File);

  function EWCFilefield() {
    var _this;

    _this = _Ext_form_File.call(this, [], []) || this;
    _this.xtype = 'filefield';
    return _this;
  }

  return EWCFilefield;
}(Ext_form_File);

export { EWCFilefield as default };
window.customElements.define('ext-filefield', ElementParser.withParsedCallback(EWCFilefield));