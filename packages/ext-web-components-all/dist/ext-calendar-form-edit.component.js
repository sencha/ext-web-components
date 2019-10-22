import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_form_edit =
/*#__PURE__*/
function (_Ext_calendar_form_Ed) {
  _inheritsLoose(ExtCalendar_form_edit, _Ext_calendar_form_Ed);

  function ExtCalendar_form_edit() {
    var _this;

    _this = _Ext_calendar_form_Ed.call(this, [], []) || this;
    _this.xtype = 'calendar-form-edit';
    return _this;
  }

  return ExtCalendar_form_edit;
}(Ext_calendar_form_Edit);

export { ExtCalendar_form_edit as default };
window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(ExtCalendar_form_edit));