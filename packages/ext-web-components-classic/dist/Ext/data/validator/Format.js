import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_Format = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_Format, _Ext_data_validator_V);

  Ext_data_validator_Format.PROPERTIES = function PROPERTIES() {
    return ['matcher', 'message'];
  };

  Ext_data_validator_Format.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Format.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Format.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_Format.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Format.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_Format, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_Format.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Format.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Format(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_Format.PROPERTIES()), events.concat(Ext_data_validator_Format.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Format.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Format;
}(Ext_data_validator_Validator);

export { Ext_data_validator_Format as default };