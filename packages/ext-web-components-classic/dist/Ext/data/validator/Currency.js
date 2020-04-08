import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Number from '../../../Ext/data/validator/Number.js';

var Ext_data_validator_Currency = /*#__PURE__*/function (_Ext_data_validator_N) {
  _inheritsLoose(Ext_data_validator_Currency, _Ext_data_validator_N);

  Ext_data_validator_Currency.PROPERTIES = function PROPERTIES() {
    return ['decimalSeparator', 'message', 'spacer', 'symbol', 'symbolAtEnd', 'thousandSeparator'];
  };

  Ext_data_validator_Currency.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Currency.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Currency.PROPERTIES());
    return Ext_data_validator_Number.getProperties(properties);
  };

  Ext_data_validator_Currency.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Currency.EVENTS());
    return Ext_data_validator_Number.getEvents(events);
  };

  _createClass(Ext_data_validator_Currency, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_N.observedAttributes;
      Ext_data_validator_Currency.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Currency.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Currency(properties, events) {
    return _Ext_data_validator_N.call(this, properties.concat(Ext_data_validator_Currency.PROPERTIES()), events.concat(Ext_data_validator_Currency.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Currency.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_N.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_N.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Currency;
}(Ext_data_validator_Number);

export { Ext_data_validator_Currency as default };