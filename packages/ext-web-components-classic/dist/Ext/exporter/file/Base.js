import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_data_Base from '../../../Ext/exporter/data/Base.js';

var Ext_exporter_file_Base = /*#__PURE__*/function (_Ext_exporter_data_Ba) {
  _inheritsLoose(Ext_exporter_file_Base, _Ext_exporter_data_Ba);

  Ext_exporter_file_Base.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'id', 'idPrefix'];
  };

  Ext_exporter_file_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_Base.PROPERTIES());
    return Ext_exporter_data_Base.getProperties(properties);
  };

  Ext_exporter_file_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_Base.EVENTS());
    return Ext_exporter_data_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_data_Ba.observedAttributes;
      Ext_exporter_file_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_Base(properties, events) {
    return _Ext_exporter_data_Ba.call(this, properties.concat(Ext_exporter_file_Base.PROPERTIES()), events.concat(Ext_exporter_file_Base.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_data_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_data_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_Base;
}(Ext_exporter_data_Base);

export { Ext_exporter_file_Base as default };