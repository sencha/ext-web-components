import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Select_Component from './Ext/form/Select';
export var ExtSelectfieldComponent =
/*#__PURE__*/
function (_Ext_form_Select_Comp) {
  _inheritsLoose(ExtSelectfieldComponent, _Ext_form_Select_Comp);

  function ExtSelectfieldComponent() {
    return _Ext_form_Select_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtSelectfieldComponent;
}(Ext_form_Select_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-selectfield', ExtSelectfieldComponent);
  });
})();