import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search_Component from './Ext/form/Search';
export var ExtSearchfieldComponent =
/*#__PURE__*/
function (_Ext_form_Search_Comp) {
  _inheritsLoose(ExtSearchfieldComponent, _Ext_form_Search_Comp);

  function ExtSearchfieldComponent() {
    return _Ext_form_Search_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtSearchfieldComponent;
}(Ext_form_Search_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-searchfield', ExtSearchfieldComponent);
  });
})();