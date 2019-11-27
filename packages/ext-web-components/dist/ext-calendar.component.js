import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_panel_Panel from '@sencha/ext-runtime-base/dist/./Ext/calendar/panel/Panel.js';
import Ext_calendar_panel_Panel from './Ext/calendar/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar =
/*#__PURE__*/
function (_Ext_calendar_panel_P) {
  _inheritsLoose(EWCCalendar, _Ext_calendar_panel_P);

  function EWCCalendar() {
    var _this;

    _this = _Ext_calendar_panel_P.call(this, [], []) || this;
    _this.xtype = 'calendar';
    return _this;
  }

  return EWCCalendar;
}(Ext_calendar_panel_Panel);

export { EWCCalendar as default };
window.customElements.define('ext-calendar', HTMLParsedElement.withParsedCallback(EWCCalendar));