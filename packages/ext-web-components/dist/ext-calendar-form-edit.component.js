import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Edit_Component from './Ext/calendar/form/Edit';
export var ExtCalendar_form_editComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ed) {
  _inheritsLoose(ExtCalendar_form_editComponent, _Ext_calendar_form_Ed);

  function ExtCalendar_form_editComponent() {
    return _Ext_calendar_form_Ed.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_form_editComponent;
}(Ext_calendar_form_Edit_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-form-edit', ExtCalendar_form_editComponent);
  });
})();