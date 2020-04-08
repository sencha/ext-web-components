import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_route_Mixin = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_route_Mixin, _Ext_Mixin);

  Ext_route_Mixin.PROPERTIES = function PROPERTIES() {
    return ['routes'];
  };

  Ext_route_Mixin.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_route_Mixin.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_route_Mixin.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_route_Mixin.getEvents = function getEvents(events) {
    events = events.concat(Ext_route_Mixin.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_route_Mixin, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_route_Mixin.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_route_Mixin.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_route_Mixin(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_route_Mixin.PROPERTIES()), events.concat(Ext_route_Mixin.EVENTS())) || this;
  }

  var _proto = Ext_route_Mixin.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_route_Mixin;
}(Ext_Mixin);

export { Ext_route_Mixin as default };