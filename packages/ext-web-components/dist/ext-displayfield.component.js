import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Display_Component from './Ext/form/Display';
export var ExtDisplayfieldComponent =
/*#__PURE__*/
function (_Ext_form_Display_Com) {
  _inheritsLoose(ExtDisplayfieldComponent, _Ext_form_Display_Com);

  function ExtDisplayfieldComponent() {
    return _Ext_form_Display_Com.call(this, '', '', {}, '') || this;
  }

  return ExtDisplayfieldComponent;
}(Ext_form_Display_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-displayfield', ExtDisplayfieldComponent);
  });
})();