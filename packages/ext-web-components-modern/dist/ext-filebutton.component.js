import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_FileButton from '@sencha/ext-runtime-base/dist/./Ext/field/FileButton.js';
import Ext_field_FileButton from './Ext/field/FileButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(EWCFilebutton));