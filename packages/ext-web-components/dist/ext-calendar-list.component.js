import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_List_Component from './Ext/calendar/List';
export var ExtCalendar_listComponent =
/*#__PURE__*/
function (_Ext_calendar_List_Co) {
  _inheritsLoose(ExtCalendar_listComponent, _Ext_calendar_List_Co);

  function ExtCalendar_listComponent() {
    return _Ext_calendar_List_Co.call(this, '', '', {}, '') || this;
  }

  return ExtCalendar_listComponent;
}(Ext_calendar_List_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-calendar-list', ExtCalendar_listComponent);
  });
})();