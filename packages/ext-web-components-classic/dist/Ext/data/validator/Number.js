import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_Number = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_Number, _Ext_data_validator_V);

  Ext_data_validator_Number.PROPERTIES = function PROPERTIES() {
    return ['decimalSeparator', 'message', 'thousandSeparator'];
  };

  Ext_data_validator_Number.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Number.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Number.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_Number.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Number.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_Number, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_Number.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Number.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Number(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_Number.PROPERTIES()), events.concat(Ext_data_validator_Number.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Number.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Number;
}(Ext_data_validator_Validator);

export { Ext_data_validator_Number as default };