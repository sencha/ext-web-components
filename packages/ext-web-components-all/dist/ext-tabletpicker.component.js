import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Tablet from './Ext/picker/Tablet.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTabletpickerComponent =
/*#__PURE__*/
function (_Ext_picker_Tablet) {
  _inheritsLoose(ExtTabletpickerComponent, _Ext_picker_Tablet);

  function ExtTabletpickerComponent() {
    var _this;

    _this = _Ext_picker_Tablet.call(this, [], []) || this;
    _this.xtype = 'tabletpicker';
    return _this;
  }

  return ExtTabletpickerComponent;
}(Ext_picker_Tablet); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabletpicker', ExtTabletpickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpickerComponent));