import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_pivot_Aggregators = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_pivot_Aggregators, _Ext_Base);

  Ext_pivot_Aggregators.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_pivot_Aggregators.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_Aggregators.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_Aggregators.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_pivot_Aggregators.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_Aggregators.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_pivot_Aggregators, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_pivot_Aggregators.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_Aggregators.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_Aggregators(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_pivot_Aggregators.PROPERTIES()), events.concat(Ext_pivot_Aggregators.EVENTS())) || this;
  }

  var _proto = Ext_pivot_Aggregators.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_Aggregators;
}(Ext_Base);

export { Ext_pivot_Aggregators as default };