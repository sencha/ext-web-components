import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Event from '../../Ext/util/Event.js';

var Ext_dom_ElementEvent = /*#__PURE__*/function (_Ext_util_Event) {
  _inheritsLoose(Ext_dom_ElementEvent, _Ext_util_Event);

  Ext_dom_ElementEvent.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dom_ElementEvent.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_ElementEvent.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_ElementEvent.PROPERTIES());
    return Ext_util_Event.getProperties(properties);
  };

  Ext_dom_ElementEvent.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_ElementEvent.EVENTS());
    return Ext_util_Event.getEvents(events);
  };

  _createClass(Ext_dom_ElementEvent, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Event.observedAttributes;
      Ext_dom_ElementEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_ElementEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_ElementEvent(properties, events) {
    return _Ext_util_Event.call(this, properties.concat(Ext_dom_ElementEvent.PROPERTIES()), events.concat(Ext_dom_ElementEvent.EVENTS())) || this;
  }

  var _proto = Ext_dom_ElementEvent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Event.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Event.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_ElementEvent;
}(Ext_util_Event);

export { Ext_dom_ElementEvent as default };