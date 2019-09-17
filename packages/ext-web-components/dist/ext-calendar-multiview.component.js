import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Multi_Component from './Ext/calendar/view/Multi';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_multiviewComponent =
/*#__PURE__*/
function (_Ext_calendar_view_Mu) {
  _inheritsLoose(ExtCalendar_multiviewComponent, _Ext_calendar_view_Mu);

  function ExtCalendar_multiviewComponent() {
    var _this;

    _this = _Ext_calendar_view_Mu.call(this, {}, [], []) || this;
    _this.xtype = 'calendar-multiview';
    return _this;
  }

  return ExtCalendar_multiviewComponent;
}(Ext_calendar_view_Multi_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-multiview', ExtCalendar_multiviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-multiview', HTMLParsedElement.withParsedCallback(ExtCalendar_multiviewComponent));