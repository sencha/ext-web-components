import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Spacer_Component from './Ext/Spacer';
export var ExtSpacerComponent =
/*#__PURE__*/
function (_Ext_Spacer_Component) {
  _inheritsLoose(ExtSpacerComponent, _Ext_Spacer_Component);

  function ExtSpacerComponent() {
    return _Ext_Spacer_Component.call(this, '', '', {}, '') || this;
  }

  return ExtSpacerComponent;
}(Ext_Spacer_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-spacer', ExtSpacerComponent);
  });
})();