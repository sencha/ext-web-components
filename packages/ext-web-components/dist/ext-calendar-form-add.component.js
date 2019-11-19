import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_form_Add from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/Add.js';
import Ext_calendar_form_Add from './Ext/calendar/form/Add.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_form_add =
/*#__PURE__*/
function (_Ext_calendar_form_Ad) {
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
window.customElements.define('ext-calendar-form-add', HTMLParsedElement.withParsedCallback(EWCCalendar_form_add));