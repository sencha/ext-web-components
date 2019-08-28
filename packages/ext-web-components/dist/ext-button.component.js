import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Button_Component from './Ext/Button';
export var ExtButtonComponent =
/*#__PURE__*/
function (_Ext_Button_Component) {
  _inheritsLoose(ExtButtonComponent, _Ext_Button_Component);

  function ExtButtonComponent() {
    return _Ext_Button_Component.call(this, '', '', {}, '') || this;
  }

  return ExtButtonComponent;
}(Ext_Button_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-button', ExtButtonComponent);
  });
})();