import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Text_Component from './Ext/form/Text';
export var ExtTextfieldComponent =
/*#__PURE__*/
function (_Ext_form_Text_Compon) {
  _inheritsLoose(ExtTextfieldComponent, _Ext_form_Text_Compon);

  function ExtTextfieldComponent() {
    return _Ext_form_Text_Compon.call(this, '', '', {}, '') || this;
  }

  return ExtTextfieldComponent;
}(Ext_form_Text_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-textfield', ExtTextfieldComponent);
  });
})();