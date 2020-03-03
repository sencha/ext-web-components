import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_event_gesture_SingleTouch from '../../../Ext/event/gesture/SingleTouch.js';

var Ext_event_gesture_DoubleTap = /*#__PURE__*/function (_Ext_event_gesture_Si) {
  _inheritsLoose(Ext_event_gesture_DoubleTap, _Ext_event_gesture_Si);

  Ext_event_gesture_DoubleTap.PROPERTIES = function PROPERTIES() {
    return ['moveDistance', 'tapDistance'];
  };

  Ext_event_gesture_DoubleTap.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_DoubleTap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_DoubleTap.PROPERTIES());
    return Ext_event_gesture_SingleTouch.getProperties(properties);
  };

  Ext_event_gesture_DoubleTap.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_DoubleTap.EVENTS());
    return Ext_event_gesture_SingleTouch.getEvents(events);
  };

  _createClass(Ext_event_gesture_DoubleTap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_gesture_Si.observedAttributes;
      Ext_event_gesture_DoubleTap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_DoubleTap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_DoubleTap(properties, events) {
    return _Ext_event_gesture_Si.call(this, properties.concat(Ext_event_gesture_DoubleTap.PROPERTIES()), events.concat(Ext_event_gesture_DoubleTap.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_DoubleTap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_gesture_Si.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_gesture_Si.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_DoubleTap;
}(Ext_event_gesture_SingleTouch);

export { Ext_event_gesture_DoubleTap as default };