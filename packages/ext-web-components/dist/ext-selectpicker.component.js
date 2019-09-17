import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_SelectPicker_Component from './Ext/picker/SelectPicker';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSelectpickerComponent =
/*#__PURE__*/
function (_Ext_picker_SelectPic) {
  _inheritsLoose(ExtSelectpickerComponent, _Ext_picker_SelectPic);

  function ExtSelectpickerComponent() {
    var _this;

    _this = _Ext_picker_SelectPic.call(this, {}, [], []) || this;
    _this.xtype = 'selectpicker';
    return _this;
  }

  return ExtSelectpickerComponent;
}(Ext_picker_SelectPicker_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectpicker', ExtSelectpickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-selectpicker', HTMLParsedElement.withParsedCallback(ExtSelectpickerComponent));