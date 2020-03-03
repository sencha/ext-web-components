import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_event_gesture_Recognizer = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_event_gesture_Recognizer, _Ext_Base);

  Ext_event_gesture_Recognizer.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_gesture_Recognizer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_Recognizer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_Recognizer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_event_gesture_Recognizer.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_Recognizer.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_event_gesture_Recognizer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_event_gesture_Recognizer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_Recognizer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_Recognizer(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_event_gesture_Recognizer.PROPERTIES()), events.concat(Ext_event_gesture_Recognizer.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_Recognizer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_Recognizer;
}(Ext_Base);

export { Ext_event_gesture_Recognizer as default };