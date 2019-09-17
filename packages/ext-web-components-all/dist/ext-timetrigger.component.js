import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Time_Component from './Ext/field/trigger/Time';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTimetriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Ti) {
  _inheritsLoose(ExtTimetriggerComponent, _Ext_field_trigger_Ti);

  function ExtTimetriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Ti.call(this) || this;
    _this.xtype = 'timetrigger';
    return _this;
  }

  return ExtTimetriggerComponent;
}(Ext_field_trigger_Time_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-timetrigger', ExtTimetriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-timetrigger', HTMLParsedElement.withParsedCallback(ExtTimetriggerComponent));