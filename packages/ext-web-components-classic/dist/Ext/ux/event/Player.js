import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_event_Driver from '../../../Ext/ux/event/Driver.js';

var Ext_ux_event_Player = /*#__PURE__*/function (_Ext_ux_event_Driver) {
  _inheritsLoose(Ext_ux_event_Player, _Ext_ux_event_Driver);

  Ext_ux_event_Player.PROPERTIES = function PROPERTIES() {
    return ['eventQueue', 'keyFrameEvents', 'listeners', 'pauseForAnimations', 'speed'];
  };

  Ext_ux_event_Player.EVENTS = function EVENTS() {
    return [{
      name: 'beforeplay',
      parameters: 'sender,eventDescriptor'
    }, {
      name: 'keyframe',
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

  Ext_ux_event_Player.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Player.PROPERTIES());
    return Ext_ux_event_Driver.getProperties(properties);
  };

  Ext_ux_event_Player.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_event_Player.EVENTS());
    return Ext_ux_event_Driver.getEvents(events);
  };

  _createClass(Ext_ux_event_Player, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_event_Driver.observedAttributes;
      Ext_ux_event_Player.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_event_Player.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_event_Player(properties, events) {
    return _Ext_ux_event_Driver.call(this, properties.concat(Ext_ux_event_Player.PROPERTIES()), events.concat(Ext_ux_event_Player.EVENTS())) || this;
  }

  var _proto = Ext_ux_event_Player.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_event_Driver.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_event_Driver.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_event_Player;
}(Ext_ux_event_Driver);

export { Ext_ux_event_Player as default };