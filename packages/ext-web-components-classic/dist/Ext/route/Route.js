import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_route_Route = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_route_Route, _Ext_Base);

  Ext_route_Route.PROPERTIES = function PROPERTIES() {
    return ['allowInactive', 'caseInsensitive', 'conditions', 'handlers', 'name', 'url'];
  };

  Ext_route_Route.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_route_Route.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_route_Route.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_route_Route.getEvents = function getEvents(events) {
    events = events.concat(Ext_route_Route.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_route_Route, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_route_Route.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_route_Route.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_route_Route(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_route_Route.PROPERTIES()), events.concat(Ext_route_Route.EVENTS())) || this;
  }

  var _proto = Ext_route_Route.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_route_Route;
}(Ext_Base);

export { Ext_route_Route as default };