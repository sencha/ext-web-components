import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../../Ext/Mixin.js';

var Ext_calendar_model_EventBase = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_calendar_model_EventBase, _Ext_Mixin);

  Ext_calendar_model_EventBase.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_calendar_model_EventBase.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_model_EventBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_model_EventBase.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_calendar_model_EventBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_model_EventBase.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_calendar_model_EventBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_calendar_model_EventBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_model_EventBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_model_EventBase(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_calendar_model_EventBase.PROPERTIES()), events.concat(Ext_calendar_model_EventBase.EVENTS())) || this;
  }

  var _proto = Ext_calendar_model_EventBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_model_EventBase;
}(Ext_Mixin);

export { Ext_calendar_model_EventBase as default };