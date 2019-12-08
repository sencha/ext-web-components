import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_File from '@sencha/ext-runtime-base/dist/./Ext/form/File.js';
import Ext_form_File from './Ext/form/File.js';
import ElementParser from './ElementParser.js';

var EWCFileuploadfield =
/*#__PURE__*/
function (_Ext_form_File) {
  _inheritsLoose(EWCFileuploadfield, _Ext_form_File);

  function EWCFileuploadfield() {
    var _this;

    _this = _Ext_form_File.call(this, [], []) || this;
    _this.xtype = 'fileuploadfield';
    return _this;
  }

  return EWCFileuploadfield;
}(Ext_form_File);

export { EWCFileuploadfield as default };
window.customElements.define('ext-fileuploadfield', ElementParser.withParsedCallback(EWCFileuploadfield));