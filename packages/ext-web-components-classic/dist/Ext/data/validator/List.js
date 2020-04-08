import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_List = /*#__PURE__*/function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_List, _Ext_data_validator_V);

  Ext_data_validator_List.PROPERTIES = function PROPERTIES() {
    return ['list'];
  };

  Ext_data_validator_List.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_validator_List.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_List.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_List.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_List.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_List, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_List.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_List.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_List(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_List.PROPERTIES()), events.concat(Ext_data_validator_List.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_List.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_List;
}(Ext_data_validator_Validator);

export { Ext_data_validator_List as default };