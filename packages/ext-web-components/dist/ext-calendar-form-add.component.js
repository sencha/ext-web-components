import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Add_Component from './Ext/calendar/form/Add';
export var ExtCalendar_form_addComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ad) {
  _inheritsLoose(ExtCalendar_form_addComponent, _Ext_calendar_form_Ad);

  function ExtCalendar_form_addComponent() {
    return _Ext_calendar_form_Ad.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_form_addComponent;
}(Ext_calendar_form_Add_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-form-add', ExtCalendar_form_addComponent);
  });
})();