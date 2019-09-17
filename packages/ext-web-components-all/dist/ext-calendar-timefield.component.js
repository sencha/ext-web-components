import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_TimeField_Component from './Ext/calendar/form/TimeField';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_timefieldComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ti) {
  _inheritsLoose(ExtCalendar_timefieldComponent, _Ext_calendar_form_Ti);

  function ExtCalendar_timefieldComponent() {
    var _this;

    _this = _Ext_calendar_form_Ti.call(this) || this;
    _this.xtype = 'calendar-timefield';
    return _this;
  }

  return ExtCalendar_timefieldComponent;
}(Ext_calendar_form_TimeField_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-timefield', ExtCalendar_timefieldComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-timefield', HTMLParsedElement.withParsedCallback(ExtCalendar_timefieldComponent));