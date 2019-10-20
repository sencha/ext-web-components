import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Week from './Ext/calendar/view/Week.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtCalendar_weekview =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(ExtCalendar_weekview, _Ext_calendar_view_We);

  function ExtCalendar_weekview() {
    var _this;

    _this = _Ext_calendar_view_We.call(this, [], []) || this;
    _this.xtype = 'calendar-weekview';
    return _this;
  }

  return ExtCalendar_weekview;
}(Ext_calendar_view_Week); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-weekview', ExtCalendar_weekview);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtCalendar_weekview as default };
window.customElements.define('ext-calendar-weekview', HTMLParsedElement.withParsedCallback(ExtCalendar_weekview)); //export default reactify(ExtCalendar_weekview);