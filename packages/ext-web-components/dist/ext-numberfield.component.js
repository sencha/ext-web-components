import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Number_Component from './Ext/form/Number';
export var ExtNumberfieldComponent =
/*#__PURE__*/
function (_Ext_form_Number_Comp) {
  _inheritsLoose(ExtNumberfieldComponent, _Ext_form_Number_Comp);

  function ExtNumberfieldComponent() {
    return _Ext_form_Number_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtNumberfieldComponent;
}(Ext_form_Number_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-numberfield', ExtNumberfieldComponent);
  });
})();