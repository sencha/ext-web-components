import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Field from './Ext/form/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtFieldComponent =
/*#__PURE__*/
function (_Ext_form_Field) {
  _inheritsLoose(ExtFieldComponent, _Ext_form_Field);

  function ExtFieldComponent() {
    var _this;

    _this = _Ext_form_Field.call(this, [], []) || this;
    _this.xtype = 'field';
    return _this;
  }

  return ExtFieldComponent;
}(Ext_form_Field); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-field', ExtFieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(ExtFieldComponent));