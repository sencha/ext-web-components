import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_event_Driver from '../../../Ext/ux/event/Driver.js';

var Ext_ux_event_Recorder = /*#__PURE__*/function (_Ext_ux_event_Driver) {
  _inheritsLoose(Ext_ux_event_Recorder, _Ext_ux_event_Driver);

  Ext_ux_event_Recorder.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_ux_event_Recorder.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'sender,eventDescriptor'
    }, {
      name: 'coalesce',
      parameters: 'sender,eventDescriptor'
    }, {
      name: 'start',
      parameters: 'sender'
    }, {
      name: 'stop',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_event_Recorder.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Recorder.PROPERTIES());
    return Ext_ux_event_Driver.getProperties(properties);
  };

  Ext_ux_event_Recorder.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_event_Recorder.EVENTS());
    return Ext_ux_event_Driver.getEvents(events);
  };

  _createClass(Ext_ux_event_Recorder, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_event_Driver.observedAttributes;
      Ext_ux_event_Recorder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_event_Recorder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_event_Recorder(properties, events) {
    return _Ext_ux_event_Driver.call(this, properties.concat(Ext_ux_event_Recorder.PROPERTIES()), events.concat(Ext_ux_event_Recorder.EVENTS())) || this;
  }

  var _proto = Ext_ux_event_Recorder.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_event_Driver.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_event_Driver.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_event_Recorder;
}(Ext_ux_event_Driver);

export { Ext_ux_event_Recorder as default };