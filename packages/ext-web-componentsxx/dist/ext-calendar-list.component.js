import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_List from './Ext/calendar/List';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_listComponent =
/*#__PURE__*/
function (_Ext_calendar_List) {
  _inheritsLoose(ExtCalendar_listComponent, _Ext_calendar_List);

  function ExtCalendar_listComponent() {
    var _this;

    _this = _Ext_calendar_List.call(this, [], []) || this;
    _this.xtype = 'calendar-list';
    return _this;
  }

  return ExtCalendar_listComponent;
}(Ext_calendar_List); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-list', ExtCalendar_listComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-list', HTMLParsedElement.withParsedCallback(ExtCalendar_listComponent));