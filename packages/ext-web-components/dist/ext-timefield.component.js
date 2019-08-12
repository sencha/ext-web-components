import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Time_Component from './Ext/field/Time';
export var ExtTimefieldComponent =
/*#__PURE__*/
function (_Ext_field_Time_Compo) {
  _inheritsLoose(ExtTimefieldComponent, _Ext_field_Time_Compo);

  function ExtTimefieldComponent() {
    return _Ext_field_Time_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtTimefieldComponent;
}(Ext_field_Time_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-timefield', ExtTimefieldComponent);
  });
})();