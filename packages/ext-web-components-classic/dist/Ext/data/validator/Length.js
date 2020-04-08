import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Bound from '../../../Ext/data/validator/Bound.js';

var Ext_data_validator_Length = /*#__PURE__*/function (_Ext_data_validator_B) {
  _inheritsLoose(Ext_data_validator_Length, _Ext_data_validator_B);

  Ext_data_validator_Length.PROPERTIES = function PROPERTIES() {
    return ['bothMessage', 'emptyMessage', 'max', 'maxOnlyMessage', 'min', 'minOnlyMessage'];
  };

  Ext_data_validator_Length.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_Length.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Length.PROPERTIES());
    return Ext_data_validator_Bound.getProperties(properties);
  };

  Ext_data_validator_Length.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Length.EVENTS());
    return Ext_data_validator_Bound.getEvents(events);
  };

  _createClass(Ext_data_validator_Length, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_B.observedAttributes;
      Ext_data_validator_Length.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Length.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Length(properties, events) {
    return _Ext_data_validator_B.call(this, properties.concat(Ext_data_validator_Length.PROPERTIES()), events.concat(Ext_data_validator_Length.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Length.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_B.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_B.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Length;
}(Ext_data_validator_Bound);

export { Ext_data_validator_Length as default };