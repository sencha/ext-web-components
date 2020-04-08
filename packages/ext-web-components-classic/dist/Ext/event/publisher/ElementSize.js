import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_event_publisher_Publisher from '../../../Ext/event/publisher/Publisher.js';

var Ext_event_publisher_ElementSize = /*#__PURE__*/function (_Ext_event_publisher_) {
  _inheritsLoose(Ext_event_publisher_ElementSize, _Ext_event_publisher_);

  Ext_event_publisher_ElementSize.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_publisher_ElementSize.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_publisher_ElementSize.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_ElementSize.PROPERTIES());
    return Ext_event_publisher_Publisher.getProperties(properties);
  };

  Ext_event_publisher_ElementSize.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_publisher_ElementSize.EVENTS());
    return Ext_event_publisher_Publisher.getEvents(events);
  };

  _createClass(Ext_event_publisher_ElementSize, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_publisher_.observedAttributes;
      Ext_event_publisher_ElementSize.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_publisher_ElementSize.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_publisher_ElementSize(properties, events) {
    return _Ext_event_publisher_.call(this, properties.concat(Ext_event_publisher_ElementSize.PROPERTIES()), events.concat(Ext_event_publisher_ElementSize.EVENTS())) || this;
  }

  var _proto = Ext_event_publisher_ElementSize.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_publisher_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_publisher_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_publisher_ElementSize;
}(Ext_event_publisher_Publisher);

export { Ext_event_publisher_ElementSize as default };