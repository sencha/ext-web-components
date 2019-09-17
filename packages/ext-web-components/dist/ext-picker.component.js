import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Picker_Component from './Ext/Picker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtPickerComponent =
/*#__PURE__*/
function (_Ext_Picker_Component) {
  _inheritsLoose(ExtPickerComponent, _Ext_Picker_Component);

  function ExtPickerComponent() {
    var _this;

    _this = _Ext_Picker_Component.call(this, {}, [], []) || this;
    _this.xtype = 'picker';
    return _this;
  }

  return ExtPickerComponent;
}(Ext_Picker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-picker', ExtPickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPickerComponent));