import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Select_Component from '../../../Ext/field/Select';

var Ext_calendar_form_TimeField_Component =
/*#__PURE__*/
function (_Ext_field_Select_Com) {
  _inheritsLoose(Ext_calendar_form_TimeField_Component, _Ext_field_Select_Com);

  //events
  //configs
  Ext_calendar_form_TimeField_Component.XTYPE = function XTYPE() {
    return 'calendar-timefield';
  };

  Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_calendar_form_TimeField_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_form_TimeField_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_form_TimeField_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Select_Com.observedAttributes;

      for (var property in Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_form_TimeField_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_form_TimeField_Component(propertiesobject, methods, events) {
    return _Ext_field_Select_Com.call(this, Object.assign(propertiesobject, Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_form_TimeField_Component.METHODS()), events.concat(Ext_calendar_form_TimeField_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_form_TimeField_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_form_TimeField_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_form_TimeField_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_form_TimeField_Component.EVENTS());
  }

  var _proto = Ext_calendar_form_TimeField_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Select_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Select_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_form_TimeField_Component;
}(Ext_field_Select_Component);

export { Ext_calendar_form_TimeField_Component as default };