import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Hidden_Component from './Ext/form/Hidden';
export var ExtHiddenfieldComponent =
/*#__PURE__*/
function (_Ext_form_Hidden_Comp) {
  _inheritsLoose(ExtHiddenfieldComponent, _Ext_form_Hidden_Comp);

  function ExtHiddenfieldComponent() {
    return _Ext_form_Hidden_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtHiddenfieldComponent;
}(Ext_form_Hidden_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-hiddenfield', ExtHiddenfieldComponent);
  });
})();