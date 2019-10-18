import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtFieldsetComponent =
/*#__PURE__*/
function (_Ext_form_FieldSet) {
  _inheritsLoose(ExtFieldsetComponent, _Ext_form_FieldSet);

  function ExtFieldsetComponent() {
    var _this;

    _this = _Ext_form_FieldSet.call(this, [], []) || this;
    _this.xtype = 'fieldset';
    return _this;
  }

  return ExtFieldsetComponent;
}(Ext_form_FieldSet); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldset', ExtFieldsetComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldsetComponent));