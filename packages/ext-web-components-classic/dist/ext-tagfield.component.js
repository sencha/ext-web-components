import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_field_Tag from '@sencha/ext-runtime-base/dist/./Ext/form/field/Tag.js';
import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './ElementParser.js';

var EWCTagfield =
/*#__PURE__*/
function (_Ext_form_field_Tag) {
  _inheritsLoose(EWCTagfield, _Ext_form_field_Tag);

  function EWCTagfield() {
    var _this;

    _this = _Ext_form_field_Tag.call(this, [], []) || this;
    _this.xtype = 'tagfield';
    return _this;
  }

  return EWCTagfield;
}(Ext_form_field_Tag);

export { EWCTagfield as default };
window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));