import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_form_Edit from '@sencha/ext-runtime-base/dist/./Ext/calendar/form/Edit.js';
import Ext_calendar_form_Edit from './Ext/calendar/form/Edit.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_form_edit =
/*#__PURE__*/
function (_Ext_calendar_form_Ed) {
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
window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(EWCCalendar_form_edit));