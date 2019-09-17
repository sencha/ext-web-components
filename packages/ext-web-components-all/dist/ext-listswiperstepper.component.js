import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_listswiper_Stepper_Component from './Ext/dataview/listswiper/Stepper';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtListswiperstepperComponent =
/*#__PURE__*/
function (_Ext_dataview_listswi) {
  _inheritsLoose(ExtListswiperstepperComponent, _Ext_dataview_listswi);

  function ExtListswiperstepperComponent() {
    var _this;

    _this = _Ext_dataview_listswi.call(this) || this;
    _this.xtype = 'listswiperstepper';
    return _this;
  }

  return ExtListswiperstepperComponent;
}(Ext_dataview_listswiper_Stepper_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-listswiperstepper', ExtListswiperstepperComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-listswiperstepper', HTMLParsedElement.withParsedCallback(ExtListswiperstepperComponent));