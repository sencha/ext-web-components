import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker from './Ext/field/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPickerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Picker) {
  _inheritsLoose(ExtPickerfieldComponent, _Ext_field_Picker);

  function ExtPickerfieldComponent() {
    var _this;

    _this = _Ext_field_Picker.call(this, [], []) || this;
    _this.xtype = 'pickerfield';
    return _this;
  }

  return ExtPickerfieldComponent;
}(Ext_field_Picker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerfield', ExtPickerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfieldComponent));