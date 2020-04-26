import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import ElementParser from './common/ElementParser.js';

var EWCCalendar_multiview = /*#__PURE__*/function (_Ext_calendar_view_Mu) {
  _inheritsLoose(EWCCalendar_multiview, _Ext_calendar_view_Mu);

  function EWCCalendar_multiview() {
    var _this;

    _this = _Ext_calendar_view_Mu.call(this, [], []) || this;
    _this.xtype = 'calendar-multiview';
    return _this;
  }

  return EWCCalendar_multiview;
}(Ext_calendar_view_Multi);

export { EWCCalendar_multiview as default };

try {
  if (window.customElements.get('ext-calendar-multiview') == undefined) {
    window.customElements.define('ext-calendar-multiview', ElementParser.withParsedCallback(EWCCalendar_multiview));
  }
} catch (e) {
  if (window.customElements.get('ext-calendar-multiview') == undefined) {
    window.customElements.define('ext-calendar-multiview', EWCCalendar_multiview);
  }
}