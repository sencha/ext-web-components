import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_d3_interaction_Abstract = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_d3_interaction_Abstract, _Ext_Base);

  Ext_d3_interaction_Abstract.PROPERTIES = function PROPERTIES() {
    return ['component', 'enabled', 'gestures', 'listeners'];
  };

  Ext_d3_interaction_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'destroy',
      parameters: 'interaction'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_interaction_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_interaction_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_d3_interaction_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_interaction_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_d3_interaction_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_d3_interaction_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_interaction_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_interaction_Abstract(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_d3_interaction_Abstract.PROPERTIES()), events.concat(Ext_d3_interaction_Abstract.EVENTS())) || this;
  }

  var _proto = Ext_d3_interaction_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_interaction_Abstract;
}(Ext_Base);

export { Ext_d3_interaction_Abstract as default };