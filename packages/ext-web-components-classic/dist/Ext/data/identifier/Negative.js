import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_identifier_Sequential from '../../../Ext/data/identifier/Sequential.js';

var Ext_data_identifier_Negative = /*#__PURE__*/function (_Ext_data_identifier_) {
  _inheritsLoose(Ext_data_identifier_Negative, _Ext_data_identifier_);

  Ext_data_identifier_Negative.PROPERTIES = function PROPERTIES() {
    return ['id', 'increment', 'prefix', 'seed'];
  };

  Ext_data_identifier_Negative.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_identifier_Negative.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_identifier_Negative.PROPERTIES());
    return Ext_data_identifier_Sequential.getProperties(properties);
  };

  Ext_data_identifier_Negative.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_identifier_Negative.EVENTS());
    return Ext_data_identifier_Sequential.getEvents(events);
  };

  _createClass(Ext_data_identifier_Negative, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_identifier_.observedAttributes;
      Ext_data_identifier_Negative.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_identifier_Negative.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_identifier_Negative(properties, events) {
    return _Ext_data_identifier_.call(this, properties.concat(Ext_data_identifier_Negative.PROPERTIES()), events.concat(Ext_data_identifier_Negative.EVENTS())) || this;
  }

  var _proto = Ext_data_identifier_Negative.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_identifier_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_identifier_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_identifier_Negative;
}(Ext_data_identifier_Sequential);

export { Ext_data_identifier_Negative as default };