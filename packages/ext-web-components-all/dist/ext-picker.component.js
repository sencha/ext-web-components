import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Picker from './Ext/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPickerComponent =
/*#__PURE__*/
function (_Ext_Picker) {
  _inheritsLoose(ExtPickerComponent, _Ext_Picker);

  function ExtPickerComponent() {
    var _this;

    _this = _Ext_Picker.call(this, [], []) || this;
    _this.xtype = 'picker';
    return _this;
  }

  return ExtPickerComponent;
}(Ext_Picker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-picker', ExtPickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-picker', HTMLParsedElement.withParsedCallback(ExtPickerComponent));