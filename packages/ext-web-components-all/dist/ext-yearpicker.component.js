import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtYearpickerComponent =
/*#__PURE__*/
function (_Ext_panel_YearPicker) {
  _inheritsLoose(ExtYearpickerComponent, _Ext_panel_YearPicker);

  function ExtYearpickerComponent() {
    var _this;

    _this = _Ext_panel_YearPicker.call(this, [], []) || this;
    _this.xtype = 'yearpicker';
    return _this;
  }

  return ExtYearpickerComponent;
}(Ext_panel_YearPicker); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-yearpicker', ExtYearpickerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(ExtYearpickerComponent));