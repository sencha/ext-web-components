import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox from './Ext/form/field/ComboBox.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtCombobox =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(ExtCombobox, _Ext_form_field_Combo);

  function ExtCombobox() {
    var _this;

    _this = _Ext_form_field_Combo.call(this, [], []) || this;
    _this.xtype = 'combobox';
    return _this;
  }

  return ExtCombobox;
}(Ext_form_field_ComboBox); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-combobox', ExtCombobox);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtCombobox as default };
window.customElements.define('ext-combobox', HTMLParsedElement.withParsedCallback(ExtCombobox)); //export default reactify(ExtCombobox);