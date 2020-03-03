import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_data_Base from '../../../Ext/exporter/data/Base.js';

var Ext_exporter_data_Column = /*#__PURE__*/function (_Ext_exporter_data_Ba) {
  _inheritsLoose(Ext_exporter_data_Column, _Ext_exporter_data_Ba);

  Ext_exporter_data_Column.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'columns', 'id', 'idPrefix', 'index', 'level', 'mergeAcross', 'mergeDown', 'style', 'table', 'text', 'width'];
  };

  Ext_exporter_data_Column.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_data_Column.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_data_Column.PROPERTIES());
    return Ext_exporter_data_Base.getProperties(properties);
  };

  Ext_exporter_data_Column.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_data_Column.EVENTS());
    return Ext_exporter_data_Base.getEvents(events);
  };

  _createClass(Ext_exporter_data_Column, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_data_Ba.observedAttributes;
      Ext_exporter_data_Column.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_data_Column.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_data_Column(properties, events) {
    return _Ext_exporter_data_Ba.call(this, properties.concat(Ext_exporter_data_Column.PROPERTIES()), events.concat(Ext_exporter_data_Column.EVENTS())) || this;
  }

  var _proto = Ext_exporter_data_Column.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_data_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_data_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_data_Column;
}(Ext_exporter_data_Base);

export { Ext_exporter_data_Column as default };