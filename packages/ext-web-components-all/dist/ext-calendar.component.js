import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar =
/*#__PURE__*/
function (_Ext_calendar_panel_P) {
  _inheritsLoose(ExtCalendar, _Ext_calendar_panel_P);

  function ExtCalendar() {
    var _this;

    _this = _Ext_calendar_panel_P.call(this, [], []) || this;
    _this.xtype = 'calendar';
    return _this;
  }

  return ExtCalendar;
}(Ext_calendar_panel_Panel);

export { ExtCalendar as default };
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(ExtCalendar));