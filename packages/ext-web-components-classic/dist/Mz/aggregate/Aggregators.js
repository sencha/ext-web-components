import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Mz_aggregate_Aggregators = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Mz_aggregate_Aggregators, _Ext_Base);

  Mz_aggregate_Aggregators.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Mz_aggregate_Aggregators.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_Aggregators.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_Aggregators.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Mz_aggregate_Aggregators.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_Aggregators.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_Aggregators, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Mz_aggregate_Aggregators.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_Aggregators.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_Aggregators(properties, events) {
    return _Ext_Base.call(this, properties.concat(Mz_aggregate_Aggregators.PROPERTIES()), events.concat(Mz_aggregate_Aggregators.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_Aggregators.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_Aggregators;
}(Ext_Base);

export { Mz_aggregate_Aggregators as default };