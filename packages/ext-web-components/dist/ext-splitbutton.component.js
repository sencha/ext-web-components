import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_SplitButton_Component from './Ext/SplitButton';
export var ExtSplitbuttonComponent =
/*#__PURE__*/
function (_Ext_SplitButton_Comp) {
  _inheritsLoose(ExtSplitbuttonComponent, _Ext_SplitButton_Comp);

  function ExtSplitbuttonComponent() {
    return _Ext_SplitButton_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtSplitbuttonComponent;
}(Ext_SplitButton_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-splitbutton', ExtSplitbuttonComponent);
  });
})();