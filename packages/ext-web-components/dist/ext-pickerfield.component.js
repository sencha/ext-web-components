import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from './Ext/field/Picker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPickerfieldComponent =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(ExtPickerfieldComponent, _Ext_field_Picker_Com);

  function ExtPickerfieldComponent() {
    var _this;

    _this = _Ext_field_Picker_Com.call(this, {}, [], []) || this;
    _this.xtype = 'pickerfield';
    return _this;
  }

  return ExtPickerfieldComponent;
}(Ext_field_Picker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pickerfield', ExtPickerfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pickerfield', HTMLParsedElement.withParsedCallback(ExtPickerfieldComponent));