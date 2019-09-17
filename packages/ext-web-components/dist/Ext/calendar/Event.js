import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_EventBase_Component from '../../Ext/calendar/EventBase';

var Ext_calendar_Event_Component =
/*#__PURE__*/
function (_Ext_calendar_EventBa) {
  _inheritsLoose(Ext_calendar_Event_Component, _Ext_calendar_EventBa);

  //events
  //configs
  Ext_calendar_Event_Component.XTYPE = function XTYPE() {
    return 'calendar-event';
  };

  Ext_calendar_Event_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "timeFormat": ["string"]
    };
  };

  Ext_calendar_Event_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_Event_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_Event_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_EventBa.observedAttributes;

      for (var property in Ext_calendar_Event_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_Event_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_Event_Component(propertiesobject, methods, events) {
    return _Ext_calendar_EventBa.call(this, Object.assign(propertiesobject, Ext_calendar_Event_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_calendar_Event_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_calendar_Event_Component.METHODS()), events.concat(Ext_calendar_Event_Component.EVENTS())) || this; //this.XTYPE = Ext_calendar_Event_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_calendar_Event_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_calendar_Event_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_calendar_Event_Component.EVENTS());
  }

  var _proto = Ext_calendar_Event_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_EventBa.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_EventBa.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_Event_Component;
}(Ext_calendar_EventBase_Component);

export { Ext_calendar_Event_Component as default };