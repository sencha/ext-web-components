import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_FileButton from './Ext/field/FileButton.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtFilebutton =
/*#__PURE__*/
function (_Ext_field_FileButton) {
  _inheritsLoose(ExtFilebutton, _Ext_field_FileButton);

  function ExtFilebutton() {
    var _this;

    _this = _Ext_field_FileButton.call(this, [], []) || this;
    _this.xtype = 'filebutton';
    return _this;
  }

  return ExtFilebutton;
}(Ext_field_FileButton);

export { ExtFilebutton as default };
window.customElements.define('ext-filebutton', HTMLParsedElement.withParsedCallback(ExtFilebutton));