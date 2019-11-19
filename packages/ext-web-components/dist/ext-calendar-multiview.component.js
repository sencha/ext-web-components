import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_view_Multi from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Multi.js';
import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_multiview =
/*#__PURE__*/
function (_Ext_calendar_view_Mu) {
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
window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(EWCCalendar_multiview));