import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Month from './Ext/calendar/view/Month.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtCalendar_monthview =
/*#__PURE__*/
function (_Ext_calendar_view_Mo) {
  _inheritsLoose(ExtCalendar_monthview, _Ext_calendar_view_Mo);

  function ExtCalendar_monthview() {
    var _this;

    _this = _Ext_calendar_view_Mo.call(this, [], []) || this;
    _this.xtype = 'calendar-monthview';
    return _this;
  }

  return ExtCalendar_monthview;
}(Ext_calendar_view_Month); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-monthview', ExtCalendar_monthview);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtCalendar_monthview as default };
window.customElements.define('ext-calendar-monthview', HTMLParsedElement.withParsedCallback(ExtCalendar_monthview)); //export default reactify(ExtCalendar_monthview);