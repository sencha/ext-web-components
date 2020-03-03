import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Currency from '../../../Ext/data/validator/Currency.js';

var Ext_data_validator_CurrencyUS = /*#__PURE__*/function (_Ext_data_validator_C) {
  _inheritsLoose(Ext_data_validator_CurrencyUS, _Ext_data_validator_C);

  Ext_data_validator_CurrencyUS.PROPERTIES = function PROPERTIES() {
    return ['decimalSeparator', 'message', 'spacer', 'symbol', 'symbolAtEnd', 'thousandSeparator'];
  };

  Ext_data_validator_CurrencyUS.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_CurrencyUS.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_CurrencyUS.PROPERTIES());
    return Ext_data_validator_Currency.getProperties(properties);
  };

  Ext_data_validator_CurrencyUS.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_CurrencyUS.EVENTS());
    return Ext_data_validator_Currency.getEvents(events);
  };

  _createClass(Ext_data_validator_CurrencyUS, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_C.observedAttributes;
      Ext_data_validator_CurrencyUS.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_CurrencyUS.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_CurrencyUS(properties, events) {
    return _Ext_data_validator_C.call(this, properties.concat(Ext_data_validator_CurrencyUS.PROPERTIES()), events.concat(Ext_data_validator_CurrencyUS.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_CurrencyUS.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_CurrencyUS;
}(Ext_data_validator_Currency);

export { Ext_data_validator_CurrencyUS as default };