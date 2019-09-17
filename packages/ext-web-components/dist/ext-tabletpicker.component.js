import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Tablet_Component from './Ext/picker/Tablet';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTabletpickerComponent =
/*#__PURE__*/
function (_Ext_picker_Tablet_Co) {
  _inheritsLoose(ExtTabletpickerComponent, _Ext_picker_Tablet_Co);

  function ExtTabletpickerComponent() {
    var _this;

    _this = _Ext_picker_Tablet_Co.call(this, {}, [], []) || this;
    _this.xtype = 'tabletpicker';
    return _this;
  }

  return ExtTabletpickerComponent;
}(Ext_picker_Tablet_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabletpicker', ExtTabletpickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tabletpicker', HTMLParsedElement.withParsedCallback(ExtTabletpickerComponent));