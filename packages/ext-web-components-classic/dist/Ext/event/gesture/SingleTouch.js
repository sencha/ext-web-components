import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_event_gesture_Recognizer from '../../../Ext/event/gesture/Recognizer.js';

var Ext_event_gesture_SingleTouch = /*#__PURE__*/function (_Ext_event_gesture_Re) {
  _inheritsLoose(Ext_event_gesture_SingleTouch, _Ext_event_gesture_Re);

  Ext_event_gesture_SingleTouch.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_gesture_SingleTouch.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_SingleTouch.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_SingleTouch.PROPERTIES());
    return Ext_event_gesture_Recognizer.getProperties(properties);
  };

  Ext_event_gesture_SingleTouch.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_SingleTouch.EVENTS());
    return Ext_event_gesture_Recognizer.getEvents(events);
  };

  _createClass(Ext_event_gesture_SingleTouch, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_gesture_Re.observedAttributes;
      Ext_event_gesture_SingleTouch.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_SingleTouch.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_SingleTouch(properties, events) {
    return _Ext_event_gesture_Re.call(this, properties.concat(Ext_event_gesture_SingleTouch.PROPERTIES()), events.concat(Ext_event_gesture_SingleTouch.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_SingleTouch.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_gesture_Re.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_gesture_Re.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_SingleTouch;
}(Ext_event_gesture_Recognizer);

export { Ext_event_gesture_SingleTouch as default };