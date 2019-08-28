import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Time_Component from './Ext/field/trigger/Time';
export var ExtTimetriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Ti) {
  _inheritsLoose(ExtTimetriggerComponent, _Ext_field_trigger_Ti);

  function ExtTimetriggerComponent() {
    return _Ext_field_trigger_Ti.call(this, '', '', {}, '') || this;
  }

  return ExtTimetriggerComponent;
}(Ext_field_trigger_Time_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-timetrigger', ExtTimetriggerComponent);
  });
})();