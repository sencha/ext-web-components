import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FormPanel_Component from './Ext/form/FormPanel';
export var ExtFormpanelComponent =
/*#__PURE__*/
function (_Ext_form_FormPanel_C) {
  _inheritsLoose(ExtFormpanelComponent, _Ext_form_FormPanel_C);

  function ExtFormpanelComponent() {
    return _Ext_form_FormPanel_C.call(this, '', '', {}, '') || this;
  }

  return ExtFormpanelComponent;
}(Ext_form_FormPanel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-formpanel', ExtFormpanelComponent);
  });
})();