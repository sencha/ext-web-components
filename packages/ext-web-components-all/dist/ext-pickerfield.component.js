import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker from './Ext/field/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtPickerfield =
/*#__PURE__*/
function (_Ext_field_Picker) {
  _inheritsLoose(ExtPickerfield, _Ext_field_Picker);

  function ExtPickerfield() {
    var _this;

    _this = _Ext_field_Picker.call(this, [], []) || this;
    _this.xtype = 'pickerfield';
    return _this;
  }

  return ExtPickerfield;
}(Ext_field_Picker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerfield', ExtPickerfield);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtPickerfield as default };
window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfield)); //export default reactify(ExtPickerfield);