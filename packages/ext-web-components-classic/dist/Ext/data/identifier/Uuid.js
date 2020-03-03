import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_identifier_Generator from '../../../Ext/data/identifier/Generator.js';

var Ext_data_identifier_Uuid = /*#__PURE__*/function (_Ext_data_identifier_) {
  _inheritsLoose(Ext_data_identifier_Uuid, _Ext_data_identifier_);

  Ext_data_identifier_Uuid.PROPERTIES = function PROPERTIES() {
    return ['clockSeq', 'id', 'salt', 'timestamp', 'version'];
  };

  Ext_data_identifier_Uuid.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_identifier_Uuid.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_identifier_Uuid.PROPERTIES());
    return Ext_data_identifier_Generator.getProperties(properties);
  };

  Ext_data_identifier_Uuid.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_identifier_Uuid.EVENTS());
    return Ext_data_identifier_Generator.getEvents(events);
  };

  _createClass(Ext_data_identifier_Uuid, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_identifier_.observedAttributes;
      Ext_data_identifier_Uuid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_identifier_Uuid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_identifier_Uuid(properties, events) {
    return _Ext_data_identifier_.call(this, properties.concat(Ext_data_identifier_Uuid.PROPERTIES()), events.concat(Ext_data_identifier_Uuid.EVENTS())) || this;
  }

  var _proto = Ext_data_identifier_Uuid.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_identifier_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_identifier_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_identifier_Uuid;
}(Ext_data_identifier_Generator);

export { Ext_data_identifier_Uuid as default };