import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Presence from '../../../Ext/data/validator/Presence.js';

var Ext_data_validator_NotNull = /*#__PURE__*/function (_Ext_data_validator_P) {
  _inheritsLoose(Ext_data_validator_NotNull, _Ext_data_validator_P);

  Ext_data_validator_NotNull.PROPERTIES = function PROPERTIES() {
    return ['allowEmpty', 'message'];
  };

  Ext_data_validator_NotNull.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_NotNull.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_NotNull.PROPERTIES());
    return Ext_data_validator_Presence.getProperties(properties);
  };

  Ext_data_validator_NotNull.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_NotNull.EVENTS());
    return Ext_data_validator_Presence.getEvents(events);
  };

  _createClass(Ext_data_validator_NotNull, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_P.observedAttributes;
      Ext_data_validator_NotNull.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_NotNull.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_NotNull(properties, events) {
    return _Ext_data_validator_P.call(this, properties.concat(Ext_data_validator_NotNull.PROPERTIES()), events.concat(Ext_data_validator_NotNull.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_NotNull.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_P.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_P.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_NotNull;
}(Ext_data_validator_Presence);

export { Ext_data_validator_NotNull as default };