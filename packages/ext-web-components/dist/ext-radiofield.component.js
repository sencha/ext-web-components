import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio_Component from './Ext/form/Radio';
export var ExtRadiofieldComponent =
/*#__PURE__*/
function (_Ext_form_Radio_Compo) {
  _inheritsLoose(ExtRadiofieldComponent, _Ext_form_Radio_Compo);

  function ExtRadiofieldComponent() {
    return _Ext_form_Radio_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtRadiofieldComponent;
}(Ext_form_Radio_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-radiofield', ExtRadiofieldComponent);
  });
})();