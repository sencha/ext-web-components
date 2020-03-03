import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_event_gesture_MultiTouch from '../../../Ext/event/gesture/MultiTouch.js';

var Ext_event_gesture_Rotate = /*#__PURE__*/function (_Ext_event_gesture_Mu) {
  _inheritsLoose(Ext_event_gesture_Rotate, _Ext_event_gesture_Mu);

  Ext_event_gesture_Rotate.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_gesture_Rotate.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_Rotate.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_Rotate.PROPERTIES());
    return Ext_event_gesture_MultiTouch.getProperties(properties);
  };

  Ext_event_gesture_Rotate.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_Rotate.EVENTS());
    return Ext_event_gesture_MultiTouch.getEvents(events);
  };

  _createClass(Ext_event_gesture_Rotate, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_gesture_Mu.observedAttributes;
      Ext_event_gesture_Rotate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_Rotate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_Rotate(properties, events) {
    return _Ext_event_gesture_Mu.call(this, properties.concat(Ext_event_gesture_Rotate.PROPERTIES()), events.concat(Ext_event_gesture_Rotate.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_Rotate.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_gesture_Mu.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_gesture_Mu.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_Rotate;
}(Ext_event_gesture_MultiTouch);

export { Ext_event_gesture_Rotate as default };