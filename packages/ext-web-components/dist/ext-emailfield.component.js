import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Email_Component from './Ext/form/Email';
export var ExtEmailfieldComponent =
/*#__PURE__*/
function (_Ext_form_Email_Compo) {
  _inheritsLoose(ExtEmailfieldComponent, _Ext_form_Email_Compo);

  function ExtEmailfieldComponent() {
    return _Ext_form_Email_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtEmailfieldComponent;
}(Ext_form_Email_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-emailfield', ExtEmailfieldComponent);
  });
})();