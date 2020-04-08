import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_form_add = /*#__PURE__*/function (_Ext_calendar_form_Ad) {
  _inheritsLoose(EWCCalendar_form_add, _Ext_calendar_form_Ad);

  function EWCCalendar_form_add() {
    var _this;

    _this = _Ext_calendar_form_Ad.call(this, [], []) || this;
    _this.xtype = 'calendar-form-add';
    return _this;
  }

  return EWCCalendar_form_add;
}(Ext_calendar_form_Add);

export { EWCCalendar_form_add as default };

try {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', ElementParser.withParsedCallback(EWCCalendar_form_add));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-form-add') == undefined) {
    window.customElements.define('ext-calendar-form-add', EWCCalendar_form_add);
  }
}