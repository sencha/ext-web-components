import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldSet_Component from './Ext/form/FieldSet';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFieldsetComponent =
/*#__PURE__*/
function (_Ext_form_FieldSet_Co) {
  _inheritsLoose(ExtFieldsetComponent, _Ext_form_FieldSet_Co);

  function ExtFieldsetComponent() {
    var _this;

    _this = _Ext_form_FieldSet_Co.call(this, {}, [], []) || this;
    _this.xtype = 'fieldset';
    return _this;
  }

  return ExtFieldsetComponent;
}(Ext_form_FieldSet_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldset', ExtFieldsetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldsetComponent));