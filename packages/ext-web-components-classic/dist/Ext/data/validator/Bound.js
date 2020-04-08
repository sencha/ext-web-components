import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_Bound = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_Bound, _Ext_data_validator_V);

  Ext_data_validator_Bound.PROPERTIES = function PROPERTIES() {
    return ['bothMessage', 'emptyMessage', 'max', 'maxOnlyMessage', 'min', 'minOnlyMessage'];
  };

  Ext_data_validator_Bound.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Bound.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Bound.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_Bound.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Bound.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_Bound, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_Bound.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Bound.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Bound(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_Bound.PROPERTIES()), events.concat(Ext_data_validator_Bound.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Bound.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Bound;
}(Ext_data_validator_Validator);

export { Ext_data_validator_Bound as default };