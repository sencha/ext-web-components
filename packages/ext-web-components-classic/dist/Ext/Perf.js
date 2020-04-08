import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_Perf = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_Perf, _Ext_Base);

  Ext_Perf.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_Perf.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Perf.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Perf.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_Perf.getEvents = function getEvents(events) {
    events = events.concat(Ext_Perf.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_Perf, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_Perf.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Perf.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Perf(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_Perf.PROPERTIES()), events.concat(Ext_Perf.EVENTS())) || this;
  }

  var _proto = Ext_Perf.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Perf;
}(Ext_Base);

export { Ext_Perf as default };