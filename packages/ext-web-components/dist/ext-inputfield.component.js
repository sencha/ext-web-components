import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input from './Ext/field/Input';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtInputfieldComponent =
/*#__PURE__*/
function (_Ext_field_Input) {
  _inheritsLoose(ExtInputfieldComponent, _Ext_field_Input);

  function ExtInputfieldComponent() {
    var _this;

    _this = _Ext_field_Input.call(this, [], []) || this;
    _this.xtype = 'inputfield';
    return _this;
  }

  return ExtInputfieldComponent;
}(Ext_field_Input); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-inputfield', ExtInputfieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfieldComponent));