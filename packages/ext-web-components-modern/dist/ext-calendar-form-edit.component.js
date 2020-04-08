import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_form_edit = /*#__PURE__*/function (_Ext_calendar_form_Ed) {
  _inheritsLoose(EWCCalendar_form_edit, _Ext_calendar_form_Ed);

  function EWCCalendar_form_edit() {
    var _this;

    _this = _Ext_calendar_form_Ed.call(this, [], []) || this;
    _this.xtype = 'calendar-form-edit';
    return _this;
  }

  return EWCCalendar_form_edit;
}(Ext_calendar_form_Edit);

export { EWCCalendar_form_edit as default };

try {
  if (window.customElements.get('ext-calendar-form-edit') == undefined) {
    window.customElements.define('ext-calendar-form-edit', ElementParser.withParsedCallback(EWCCalendar_form_edit));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-form-edit') == undefined) {
    window.customElements.define('ext-calendar-form-edit', EWCCalendar_form_edit);
  }
}