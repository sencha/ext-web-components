import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Model from '../../../Ext/data/Model.js';

var Ext_grid_property_Property = /*#__PURE__*/function (_Ext_data_Model) {
  _inheritsLoose(Ext_grid_property_Property, _Ext_data_Model);

  Ext_grid_property_Property.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_grid_property_Property.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_property_Property.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_property_Property.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_grid_property_Property.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_property_Property.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  _createClass(Ext_grid_property_Property, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_grid_property_Property.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_property_Property.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_property_Property(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_grid_property_Property.PROPERTIES()), events.concat(Ext_grid_property_Property.EVENTS())) || this;
  }

  var _proto = Ext_grid_property_Property.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_property_Property;
}(Ext_data_Model);

export { Ext_grid_property_Property as default };