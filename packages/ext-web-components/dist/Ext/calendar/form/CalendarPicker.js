import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Select_Component from '../../../Ext/field/Select';

var Ext_calendar_form_CalendarPicker_Component =
/*#__PURE__*/
function (_Ext_field_Select_Com) {
  _inheritsLoose(Ext_calendar_form_CalendarPicker_Component, _Ext_field_Select_Com);

  //events
  //configs
  Ext_calendar_form_CalendarPicker_Component.XTYPE = function XTYPE() {
    return 'calendar-calendar-picker';
  };

  Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_calendar_form_CalendarPicker_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_form_CalendarPicker_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_form_CalendarPicker_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Select_Com.observedAttributes;

      for (var property in Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_form_CalendarPicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_CalendarPicker_Component() {
    var _this;

    _this = _Ext_field_Select_Com.call(this, Ext_calendar_form_CalendarPicker_Component.METHODS(), Ext_calendar_form_CalendarPicker_Component.XTYPE(), Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT(), Ext_calendar_form_CalendarPicker_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_form_CalendarPicker_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_form_CalendarPicker_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_form_CalendarPicker_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_form_CalendarPicker_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_form_CalendarPicker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Select_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Select_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_CalendarPicker_Component;
}(Ext_field_Select_Component);

export { Ext_calendar_form_CalendarPicker_Component as default };