import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_direct_RemotingEvent from '../../Ext/direct/RemotingEvent.js';

var Ext_direct_ExceptionEvent = /*#__PURE__*/function (_Ext_direct_RemotingE) {
  _inheritsLoose(Ext_direct_ExceptionEvent, _Ext_direct_RemotingE);

  Ext_direct_ExceptionEvent.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_direct_ExceptionEvent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_ExceptionEvent.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_ExceptionEvent.PROPERTIES());
    return Ext_direct_RemotingEvent.getProperties(properties);
  };

  Ext_direct_ExceptionEvent.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_ExceptionEvent.EVENTS());
    return Ext_direct_RemotingEvent.getEvents(events);
  };

  _createClass(Ext_direct_ExceptionEvent, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_direct_RemotingE.observedAttributes;
      Ext_direct_ExceptionEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_ExceptionEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_ExceptionEvent(properties, events) {
    return _Ext_direct_RemotingE.call(this, properties.concat(Ext_direct_ExceptionEvent.PROPERTIES()), events.concat(Ext_direct_ExceptionEvent.EVENTS())) || this;
  }

  var _proto = Ext_direct_ExceptionEvent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_direct_RemotingE.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_direct_RemotingE.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_ExceptionEvent;
}(Ext_direct_RemotingEvent);

export { Ext_direct_ExceptionEvent as default };