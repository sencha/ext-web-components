import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Url_Component from './Ext/form/Url';
export var ExtUrlfieldComponent =
/*#__PURE__*/
function (_Ext_form_Url_Compone) {
  _inheritsLoose(ExtUrlfieldComponent, _Ext_form_Url_Compone);

  function ExtUrlfieldComponent() {
    return _Ext_form_Url_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtUrlfieldComponent;
}(Ext_form_Url_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-urlfield', ExtUrlfieldComponent);
  });
})();