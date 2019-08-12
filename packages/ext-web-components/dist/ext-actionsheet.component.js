import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ActionSheet_Component from './Ext/ActionSheet';
export var ExtActionsheetComponent =
/*#__PURE__*/
function (_Ext_ActionSheet_Comp) {
  _inheritsLoose(ExtActionsheetComponent, _Ext_ActionSheet_Comp);

  function ExtActionsheetComponent() {
    return _Ext_ActionSheet_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtActionsheetComponent;
}(Ext_ActionSheet_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-actionsheet', ExtActionsheetComponent);
  });
})();