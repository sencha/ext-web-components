import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_direct_Event from '../../Ext/direct/Event.js';

var Ext_direct_RemotingEvent = /*#__PURE__*/function (_Ext_direct_Event) {
  _inheritsLoose(Ext_direct_RemotingEvent, _Ext_direct_Event);

  var _super = _createSuper(Ext_direct_RemotingEvent);

  Ext_direct_RemotingEvent.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_direct_RemotingEvent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_RemotingEvent.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_RemotingEvent.PROPERTIES());
    return Ext_direct_Event.getProperties(properties);
  };

  Ext_direct_RemotingEvent.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_RemotingEvent.EVENTS());
    return Ext_direct_Event.getEvents(events);
  };

  _createClass(Ext_direct_RemotingEvent, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_direct_Event.observedAttributes;
      Ext_direct_RemotingEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_RemotingEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_RemotingEvent(properties, events) {
    return _Ext_direct_Event.call(this, properties.concat(Ext_direct_RemotingEvent.PROPERTIES()), events.concat(Ext_direct_RemotingEvent.EVENTS())) || this;
  }

  var _proto = Ext_direct_RemotingEvent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_direct_Event.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_direct_Event.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_RemotingEvent;
}(Ext_direct_Event);

export { Ext_direct_RemotingEvent as default };