import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Format from '../../../Ext/data/validator/Format.js';

var Ext_data_validator_Email = /*#__PURE__*/function (_Ext_data_validator_F) {
  _inheritsLoose(Ext_data_validator_Email, _Ext_data_validator_F);

  Ext_data_validator_Email.PROPERTIES = function PROPERTIES() {
    return ['matcher', 'message'];
  };

  Ext_data_validator_Email.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Email.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Email.PROPERTIES());
    return Ext_data_validator_Format.getProperties(properties);
  };

  Ext_data_validator_Email.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Email.EVENTS());
    return Ext_data_validator_Format.getEvents(events);
  };

  _createClass(Ext_data_validator_Email, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_F.observedAttributes;
      Ext_data_validator_Email.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Email.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Email(properties, events) {
    return _Ext_data_validator_F.call(this, properties.concat(Ext_data_validator_Email.PROPERTIES()), events.concat(Ext_data_validator_Email.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Email.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_F.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_F.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Email;
}(Ext_data_validator_Format);

export { Ext_data_validator_Email as default };