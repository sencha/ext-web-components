import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_event_gesture_Recognizer from '../../../Ext/event/gesture/Recognizer.js';

var Ext_event_gesture_MultiTouch = /*#__PURE__*/function (_Ext_event_gesture_Re) {
  _inheritsLoose(Ext_event_gesture_MultiTouch, _Ext_event_gesture_Re);

  var _super = _createSuper(Ext_event_gesture_MultiTouch);

  Ext_event_gesture_MultiTouch.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_gesture_MultiTouch.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_gesture_MultiTouch.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_MultiTouch.PROPERTIES());
    return Ext_event_gesture_Recognizer.getProperties(properties);
  };

  Ext_event_gesture_MultiTouch.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_gesture_MultiTouch.EVENTS());
    return Ext_event_gesture_Recognizer.getEvents(events);
  };

  _createClass(Ext_event_gesture_MultiTouch, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_gesture_Re.observedAttributes;
      Ext_event_gesture_MultiTouch.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_gesture_MultiTouch.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_gesture_MultiTouch(properties, events) {
    return _Ext_event_gesture_Re.call(this, properties.concat(Ext_event_gesture_MultiTouch.PROPERTIES()), events.concat(Ext_event_gesture_MultiTouch.EVENTS())) || this;
  }

  var _proto = Ext_event_gesture_MultiTouch.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_gesture_Re.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_gesture_Re.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_gesture_MultiTouch;
}(Ext_event_gesture_Recognizer);

export { Ext_event_gesture_MultiTouch as default };