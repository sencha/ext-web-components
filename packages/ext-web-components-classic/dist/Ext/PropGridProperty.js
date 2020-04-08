import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Model from '../Ext/data/Model.js';

var Ext_PropGridProperty = /*#__PURE__*/function (_Ext_data_Model) {
  _inheritsLoose(Ext_PropGridProperty, _Ext_data_Model);

  Ext_PropGridProperty.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_PropGridProperty.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_PropGridProperty.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_PropGridProperty.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_PropGridProperty.getEvents = function getEvents(events) {
    events = events.concat(Ext_PropGridProperty.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  _createClass(Ext_PropGridProperty, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_PropGridProperty.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_PropGridProperty.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_PropGridProperty(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_PropGridProperty.PROPERTIES()), events.concat(Ext_PropGridProperty.EVENTS())) || this;
  }

  var _proto = Ext_PropGridProperty.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_PropGridProperty;
}(Ext_data_Model);

export { Ext_PropGridProperty as default };