import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_event_gesture_Swipe from '../../../Ext/event/gesture/Swipe.js';

var Ext_event_gesture_EdgeSwipe = /*#__PURE__*/function (_Ext_event_gesture_Sw) {
  _inheritsLoose(Ext_event_gesture_EdgeSwipe, _Ext_event_gesture_Sw);

  Ext_event_gesture_EdgeSwipe.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_gesture_EdgeSwipe.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_EdgeSwipe.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_EdgeSwipe.PROPERTIES());
    return Ext_event_gesture_Swipe.getProperties(properties);
  };

  Ext_event_gesture_EdgeSwipe.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_EdgeSwipe.EVENTS());
    return Ext_event_gesture_Swipe.getEvents(events);
  };

  _createClass(Ext_event_gesture_EdgeSwipe, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_gesture_Sw.observedAttributes;
      Ext_event_gesture_EdgeSwipe.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_EdgeSwipe.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_EdgeSwipe(properties, events) {
    return _Ext_event_gesture_Sw.call(this, properties.concat(Ext_event_gesture_EdgeSwipe.PROPERTIES()), events.concat(Ext_event_gesture_EdgeSwipe.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_EdgeSwipe.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_gesture_Sw.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_gesture_Sw.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_EdgeSwipe;
}(Ext_event_gesture_Swipe);

export { Ext_event_gesture_EdgeSwipe as default };