import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Segmented_Component from './Ext/button/Segmented';
export var ExtSegmentedbuttonComponent =
/*#__PURE__*/
function (_Ext_button_Segmented) {
  _inheritsLoose(ExtSegmentedbuttonComponent, _Ext_button_Segmented);

  function ExtSegmentedbuttonComponent() {
    return _Ext_button_Segmented.call(this, '', '', {}, '') || this;
  }

  return ExtSegmentedbuttonComponent;
}(Ext_button_Segmented_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-segmentedbutton', ExtSegmentedbuttonComponent);
  });
})();