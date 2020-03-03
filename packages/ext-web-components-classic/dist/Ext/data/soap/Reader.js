import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_reader_Xml from '../../../Ext/data/reader/Xml.js';

var Ext_data_soap_Reader = /*#__PURE__*/function (_Ext_data_reader_Xml) {
  _inheritsLoose(Ext_data_soap_Reader, _Ext_data_reader_Xml);

  Ext_data_soap_Reader.PROPERTIES = function PROPERTIES() {
    return ['groupRootProperty', 'implicitIncludes', 'keepRawData', 'listeners', 'messageProperty', 'model', 'namespace', 'proxy', 'readRecordsOnFailure', 'record', 'rootProperty', 'successProperty', 'summaryRootProperty', 'totalProperty', 'transform', 'typeProperty'];
  };

  Ext_data_soap_Reader.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'reader,response,error'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_soap_Reader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_soap_Reader.PROPERTIES());
    return Ext_data_reader_Xml.getProperties(properties);
  };

  Ext_data_soap_Reader.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_soap_Reader.EVENTS());
    return Ext_data_reader_Xml.getEvents(events);
  };

  _createClass(Ext_data_soap_Reader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_reader_Xml.observedAttributes;
      Ext_data_soap_Reader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_soap_Reader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_soap_Reader(properties, events) {
    return _Ext_data_reader_Xml.call(this, properties.concat(Ext_data_soap_Reader.PROPERTIES()), events.concat(Ext_data_soap_Reader.EVENTS())) || this;
  }

  var _proto = Ext_data_soap_Reader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_reader_Xml.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_reader_Xml.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_soap_Reader;
}(Ext_data_reader_Xml);

export { Ext_data_soap_Reader as default };