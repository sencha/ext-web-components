import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Region from '../../Ext/util/Region.js';

var Ext_util_Point = /*#__PURE__*/function (_Ext_util_Region) {
  _inheritsLoose(Ext_util_Point, _Ext_util_Region);

  Ext_util_Point.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_Point.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Point.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Point.PROPERTIES());
    return Ext_util_Region.getProperties(properties);
  };

  Ext_util_Point.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Point.EVENTS());
    return Ext_util_Region.getEvents(events);
  };

  _createClass(Ext_util_Point, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Region.observedAttributes;
      Ext_util_Point.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Point.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Point(properties, events) {
    return _Ext_util_Region.call(this, properties.concat(Ext_util_Point.PROPERTIES()), events.concat(Ext_util_Point.EVENTS())) || this;
  }

  var _proto = Ext_util_Point.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Region.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Region.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Point;
}(Ext_util_Region);

export { Ext_util_Point as default };