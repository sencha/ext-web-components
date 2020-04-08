import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_field_Integer from '../../../Ext/data/field/Integer.js';

var Ext_data_field_Number = /*#__PURE__*/function (_Ext_data_field_Integ) {
  _inheritsLoose(Ext_data_field_Number, _Ext_data_field_Integ);

  Ext_data_field_Number.PROPERTIES = function PROPERTIES() {
    return ['allowBlank', 'allowNull', 'calculate', 'convert', 'critical', 'defaultValue', 'depends', 'mapping', 'name', 'persist', 'reference', 'serialize', 'sortType', 'summary', 'summaryField', 'unique', 'validators'];
  };

  Ext_data_field_Number.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_field_Number.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_field_Number.PROPERTIES());
    return Ext_data_field_Integer.getProperties(properties);
  };

  Ext_data_field_Number.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_field_Number.EVENTS());
    return Ext_data_field_Integer.getEvents(events);
  };

  _createClass(Ext_data_field_Number, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_field_Integ.observedAttributes;
      Ext_data_field_Number.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_field_Number.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_field_Number(properties, events) {
    return _Ext_data_field_Integ.call(this, properties.concat(Ext_data_field_Number.PROPERTIES()), events.concat(Ext_data_field_Number.EVENTS())) || this;
  }

  var _proto = Ext_data_field_Number.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_field_Integ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_field_Integ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_field_Number;
}(Ext_data_field_Integer);

export { Ext_data_field_Number as default };