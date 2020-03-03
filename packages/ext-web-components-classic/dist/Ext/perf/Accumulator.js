import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_perf_Accumulator = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_perf_Accumulator, _Ext_Base);

  Ext_perf_Accumulator.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_perf_Accumulator.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_perf_Accumulator.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_perf_Accumulator.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_perf_Accumulator.getEvents = function getEvents(events) {
    events = events.concat(Ext_perf_Accumulator.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_perf_Accumulator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_perf_Accumulator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_perf_Accumulator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_perf_Accumulator(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_perf_Accumulator.PROPERTIES()), events.concat(Ext_perf_Accumulator.EVENTS())) || this;
  }

  var _proto = Ext_perf_Accumulator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_perf_Accumulator;
}(Ext_Base);

export { Ext_perf_Accumulator as default };