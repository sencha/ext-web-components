import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_form_add =
/*#__PURE__*/
function (_Ext_calendar_form_Ad) {
  _inheritsLoose(ExtCalendar_form_add, _Ext_calendar_form_Ad);

  function ExtCalendar_form_add() {
    var _this;

    _this = _Ext_calendar_form_Ad.call(this, [], []) || this;
    _this.xtype = 'calendar-form-add';
    return _this;
  }

  return ExtCalendar_form_add;
}(Ext_calendar_form_Add);

export { ExtCalendar_form_add as default };
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(ExtCalendar_form_add));