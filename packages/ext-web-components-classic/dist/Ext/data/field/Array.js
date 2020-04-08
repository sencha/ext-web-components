import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_field_Field from '../../../Ext/data/field/Field.js';

var Ext_data_field_Array = /*#__PURE__*/function (_Ext_data_field_Field) {
  _inheritsLoose(Ext_data_field_Array, _Ext_data_field_Field);

  Ext_data_field_Array.PROPERTIES = function PROPERTIES() {
    return ['allowBlank', 'allowNull', 'calculate', 'convert', 'critical', 'defaultValue', 'depends', 'itemType', 'mapping', 'name', 'persist', 'reference', 'serialize', 'sortType', 'summary', 'summaryField', 'unique', 'validators'];
  };

  Ext_data_field_Array.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_field_Array.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_field_Array.PROPERTIES());
    return Ext_data_field_Field.getProperties(properties);
  };

  Ext_data_field_Array.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_field_Array.EVENTS());
    return Ext_data_field_Field.getEvents(events);
  };

  _createClass(Ext_data_field_Array, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_field_Field.observedAttributes;
      Ext_data_field_Array.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_field_Array.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_field_Array(properties, events) {
    return _Ext_data_field_Field.call(this, properties.concat(Ext_data_field_Array.PROPERTIES()), events.concat(Ext_data_field_Array.EVENTS())) || this;
  }

  var _proto = Ext_data_field_Array.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_field_Field.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_field_Field.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_field_Array;
}(Ext_data_field_Field);

export { Ext_data_field_Array as default };