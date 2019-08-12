import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Stepper_Component from './Ext/dataview/listswiper/Stepper';
export var ExtListswiperstepperComponent =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperstepperComponent, _Ext_dataview_listswi);

  function ExtListswiperstepperComponent() {
    return _Ext_dataview_listswi.call(this, '', '', {}, '') || this;
  }

  return ExtListswiperstepperComponent;
}(Ext_dataview_listswiper_Stepper_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-listswiperstepper', ExtListswiperstepperComponent);
  });
})();