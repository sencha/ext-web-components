import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_Presence = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_Presence, _Ext_data_validator_V);

  Ext_data_validator_Presence.PROPERTIES = function PROPERTIES() {
    return ['allowEmpty', 'message'];
  };

  Ext_data_validator_Presence.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Presence.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Presence.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_Presence.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Presence.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_Presence, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_Presence.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Presence.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Presence(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_Presence.PROPERTIES()), events.concat(Ext_data_validator_Presence.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Presence.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Presence;
}(Ext_data_validator_Validator);

export { Ext_data_validator_Presence as default };