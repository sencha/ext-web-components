import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCalendar_multiview =
/*#__PURE__*/
function (_Ext_calendar_view_Mu) {
  _inheritsLoose(ExtCalendar_multiview, _Ext_calendar_view_Mu);

  function ExtCalendar_multiview() {
    var _this;

    _this = _Ext_calendar_view_Mu.call(this, [], []) || this;
    _this.xtype = 'calendar-multiview';
    return _this;
  }

  return ExtCalendar_multiview;
}(Ext_calendar_view_Multi);

export { ExtCalendar_multiview as default };
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiview));