import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_form_Edit_Component from './Ext/calendar/form/Edit';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCalendar_form_editComponent =
/*#__PURE__*/
function (_Ext_calendar_form_Ed) {
  _inheritsLoose(ExtCalendar_form_editComponent, _Ext_calendar_form_Ed);

  function ExtCalendar_form_editComponent() {
    var _this;

    _this = _Ext_calendar_form_Ed.call(this) || this;
    _this.xtype = 'calendar-form-edit';
    return _this;
  }

  return ExtCalendar_form_editComponent;
}(Ext_calendar_form_Edit_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-calendar-form-edit', ExtCalendar_form_editComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-calendar-form-edit', HTMLParsedElement.withParsedCallback(ExtCalendar_form_editComponent));